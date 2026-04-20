export function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navMenu.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.matches("a.nav-link")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const pageId = document.body.dataset.page;
  if (pageId) {
    const activeLink = document.querySelector(`[data-page-link="${pageId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}
