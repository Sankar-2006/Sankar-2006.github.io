export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const text = document.getElementById("themeText");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (text) {
      text.textContent = theme === "dark" ? "Dark" : "Light";
    }
  }

  const savedTheme = localStorage.getItem("portfolio-theme");
  const initial = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
}
