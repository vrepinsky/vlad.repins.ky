type Theme = "dark" | "light";

const updateThemeUI = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll("[data-theme-icon]").forEach((node) => {
    node.textContent = theme === "dark" ? "🌙" : "🌞";
  });
};

const initThemeToggle = () => {
  const currentTheme: Theme =
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  updateThemeUI(currentTheme);

  document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((button) => {
    if (button.dataset.themeBound === "true") return;

    button.dataset.themeBound = "true";
    button.addEventListener("click", () => {
      const nextTheme: Theme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";

      window.localStorage.setItem("theme", nextTheme);
      updateThemeUI(nextTheme);
    });
  });
};

initThemeToggle();
