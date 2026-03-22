type Theme = "dark" | "light";

const updateTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

const initThemeToggle = () => {
  const currentTheme: Theme =
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  updateTheme(currentTheme);

  document
    .querySelectorAll<HTMLElement>("[data-theme-toggle]")
    .forEach((button) => {
      if (button.dataset.themeBound === "true") return;

      button.dataset.themeBound = "true";
      button.addEventListener("click", () => {
        const nextTheme: Theme =
          document.documentElement.dataset.theme === "dark" ? "light" : "dark";

        window.localStorage.setItem("theme", nextTheme);
        updateTheme(nextTheme);
      });
    });
};

initThemeToggle();
