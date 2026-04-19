(function () {
  const root = document.documentElement;

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeText) themeText.textContent = theme === "light" ? "Light" : "Dark";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
  } else {
    // default
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close after clicking a link
    navMenu.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.matches && t.matches("a.nav-link")) closeMenu();
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Contact form => mailto (no backend)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const subject = String(fd.get("subject") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const to = "youremail@example.com"; // change later
      const bodyLines = [
        `Name: ${name}`,
        "",
        message
      ];

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailto;
    });
  }
})();
