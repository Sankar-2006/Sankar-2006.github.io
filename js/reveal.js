export function initReveal() {
  const items = document.querySelectorAll("[data-animate]");
  if (!items.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
}
