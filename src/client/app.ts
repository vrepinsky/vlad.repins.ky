/**
 * Everything on this site that genuinely needs JavaScript. Replaces
 * theme.provider.tsx, useToggleTheme, useTheme, Location.tsx and their hooks.
 *
 * htmx swaps #content, so anything that writes into page content has to run
 * again after a swap — hence the re-apply on htmx:afterSettle. The theme lives
 * on <html>, outside every swap target, so it only ever needs wiring once.
 */

type ThemeKey = "light" | "dark";

const THEME_ICONS: Record<ThemeKey, string> = { light: "🌞", dark: "🌙" };

/* ---------------------------------------------------------------- theme --- */

const currentTheme = (): ThemeKey =>
  document.documentElement.dataset["theme"] === "dark" ? "dark" : "light";

const applyTheme = (theme: ThemeKey) => {
  document.documentElement.dataset["theme"] = theme;
  // Keep the JSON encoding the React app used, so a visitor's stored
  // preference survives the migration in both directions.
  try {
    localStorage.setItem("theme", JSON.stringify(theme));
  } catch {
    /* private mode — the theme just won't persist */
  }
  const button = document.getElementById("theme-toggle");
  if (button) button.textContent = THEME_ICONS[theme];
};

const initTheme = () => {
  applyTheme(currentTheme());
  document
    .getElementById("theme-toggle")
    ?.addEventListener("click", () => applyTheme(currentTheme() === "dark" ? "light" : "dark"));
};

/* ------------------------------------------------------ clock + weather --- */

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Amsterdam",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.3676&longitude=4.9041&current=temperature_2m,weather_code&timezone=Europe/Amsterdam";

// Weather code mappings from Open-Meteo
const weatherEmoji = (code: number): string => {
  if (code === 0) return "☀️";
  if (code <= 3) return "🌤️";
  if (code <= 49) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 82) return "🌧️";
  if (code <= 86) return "🌨️";
  return "⛈️";
};

const weatherDescription = (code: number): string => {
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 49) return "Foggy";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Rain Showers";
  if (code <= 86) return "Snow Showers";
  return "Thunderstorm";
};

/** Cached so a boosted navigation back to "/" doesn't refetch. */
let weatherText = "";

const fill = (selector: string, text: string) => {
  for (const el of window.document.querySelectorAll<HTMLElement>(selector)) {
    el.textContent = text;
    el.hidden = text === "";
  }
};

const renderClock = () => fill("[data-clock]", `🕐 ${timeFormatter.format(new Date())}`);
const renderWeather = () => fill("[data-weather]", weatherText);

const fetchWeather = async () => {
  try {
    const response = await fetch(WEATHER_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = (await response.json()) as {
      current: { temperature_2m: number; weather_code: number };
    };
    const code = data.current.weather_code;
    weatherText = `${weatherEmoji(code)} ${weatherDescription(code)}, ${Math.round(
      data.current.temperature_2m,
    )}°C`;
    renderWeather();
  } catch (error) {
    console.error("Failed to fetch weather:", error);
  }
};

const initLocation = () => {
  renderClock();
  setInterval(renderClock, 60_000);

  void fetchWeather();
  setInterval(() => void fetchWeather(), 600_000);
};

/* ------------------------------------------------------------------ nav --- */

/**
 * The nav is normally kept correct by hx-select-oob, which re-renders it from
 * the server on every boosted swap. History restores (back/forward) don't go
 * through that path, so re-derive the active link from the URL.
 */
const syncNav = () => {
  const here = window.location.pathname.replace(/\/?$/, "/");
  for (const anchor of window.document.querySelectorAll<HTMLAnchorElement>("#nav a[href]")) {
    const href = anchor.getAttribute("href") ?? "";
    const path = href.replace(/\/?$/, "/");
    if (path === here) anchor.setAttribute("aria-current", "page");
    else anchor.removeAttribute("aria-current");
  }
};

/* ----------------------------------------------------------------- boot --- */

initTheme();
initLocation();

// Content that lives inside #content is replaced wholesale on every boosted
// navigation, so re-apply anything JS had written into it.
window.document.body.addEventListener("htmx:afterSettle", () => {
  renderClock();
  renderWeather();
});

window.document.body.addEventListener("htmx:historyRestore", syncNav);
