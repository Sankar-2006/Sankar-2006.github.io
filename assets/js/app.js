import { portfolioData } from "./data.js";

const doc = document;

function setText(id, value) {
  const el = doc.getElementById(id);
  if (el) el.textContent = value;
}

function createLink(label, url, external = true) {
  const a = doc.createElement("a");
  a.textContent = label;
  a.href = url;
  if (external) {
    a.target = "_blank";
    a.rel = "noreferrer";
  }
  return a;
}

function renderNav() {
  const nav = doc.getElementById("mainNav");
  if (!nav) return;

  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const ul = doc.createElement("ul");
  ul.className = "nav-list";

  items.forEach((item) => {
    const li = doc.createElement("li");
    const a = createLink(item.label, item.href, false);
    a.className = "nav-link";
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
}

function renderHero() {
  const { profile, socials } = portfolioData;

  setText("brandName", profile.name);
  setText("heroEyebrow", profile.heroEyebrow);
  setText("heroName", profile.name);
  setText("heroSubtitle", profile.heroSubtitle);
  setText("footerName", profile.name);
  setText("aboutText", profile.about);

  const socialRow = doc.getElementById("socialRow");
  if (socialRow) {
    socials.forEach((item, index) => {
      const a = createLink(item.label, item.url, true);
      a.className = "social-link";
      socialRow.appendChild(a);
      if (index < socials.length - 1) {
        const sep = doc.createElement("span");
        sep.textContent = "|";
        sep.className = "sep";
        socialRow.appendChild(sep);
      }
    });
  }

  const focusList = doc.getElementById("focusList");
  if (focusList) {
    profile.focusAreas.forEach((text) => {
      const li = doc.createElement("li");
      li.textContent = text;
      focusList.appendChild(li);
    });
  }

  const heroMeta = doc.getElementById("heroMeta");
  if (heroMeta) {
    heroMeta.innerHTML = `
      <p><strong>Role:</strong> ${profile.shortRole}</p>
      <p><strong>Location:</strong> ${profile.location}</p>
      <p><strong>Status:</strong> ${profile.availability}</p>
    `;
  }
}

function renderStats() {
  const wrap = doc.getElementById("statsGrid");
  if (!wrap) return;

  portfolioData.stats.forEach((item, index) => {
    const card = doc.createElement("article");
    card.className = "stat-card reveal";
    card.dataset.reveal = "up";
    card.style.setProperty("--delay", `${index * 80}ms`);
    card.innerHTML = `
      <p class="stat-value" data-count="${item.value}" data-suffix="${item.suffix}">0${item.suffix}</p>
      <p class="stat-label">${item.label}</p>
    `;
    wrap.appendChild(card);
  });
}

function renderSkills() {
  const wrap = doc.getElementById("skillsGrid");
  if (!wrap) return;

  portfolioData.skills.forEach((group, index) => {
    const card = doc.createElement("article");
    card.className = "skill-card reveal";
    card.dataset.reveal = index % 2 === 0 ? "left" : "right";

    const chips = group.tags.map((tag) => `<span>${tag}</span>`).join("");
    card.innerHTML = `
      <h3>${group.title}</h3>
      <div class="chip-row">${chips}</div>
    `;
    wrap.appendChild(card);
  });
}

function renderProjects() {
  const wrap = doc.getElementById("projectsGrid");
  if (!wrap) return;

  portfolioData.projects.forEach((project, index) => {
    const card = doc.createElement("article");
    card.className = "project-card reveal";
    card.dataset.reveal = "up";
    card.style.setProperty("--delay", `${index * 90}ms`);

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="chip-row">${project.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      <a href="${project.link}" target="_blank" rel="noreferrer">View Details</a>
    `;

    wrap.appendChild(card);
  });
}

function renderEducation() {
  const wrap = doc.getElementById("educationTimeline");
  if (!wrap) return;

  portfolioData.education.forEach((item, index) => {
    const article = doc.createElement("article");
    article.className = "timeline-item reveal";
    article.dataset.reveal = "left";
    article.style.setProperty("--delay", `${index * 80}ms`);
    article.innerHTML = `
      <p class="period">${item.period}</p>
      <h3>${item.title}</h3>
      <p class="inst">${item.institution}</p>
      <p>${item.details}</p>
    `;
    wrap.appendChild(article);
  });
}

function renderCerts() {
  const wrap = doc.getElementById("certGrid");
  if (!wrap) return;

  portfolioData.certifications.forEach((cert, index) => {
    const card = doc.createElement("article");
    card.className = "cert-card reveal";
    card.dataset.reveal = "right";
    card.style.setProperty("--delay", `${index * 80}ms`);
    card.innerHTML = `
      <h3>${cert.name}</h3>
      <p>${cert.org}</p>
      <span>${cert.year}</span>
    `;
    wrap.appendChild(card);
  });
}

function renderContact() {
  const { contacts } = portfolioData;
  const list = doc.getElementById("contactList");
  if (!list) return;

  const items = [
    { label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { label: "Phone", value: contacts.phone },
    { label: "LinkedIn", value: "Open Profile", href: contacts.linkedin },
    { label: "GitHub", value: "Open Profile", href: contacts.github },
    { label: "Resume", value: "View Resume", href: contacts.resume }
  ];

  items.forEach((item) => {
    const li = doc.createElement("li");
    const strong = doc.createElement("strong");
    strong.textContent = `${item.label}: `;
    li.appendChild(strong);

    if (item.href) {
      const a = createLink(item.value, item.href, !item.href.startsWith("mailto:"));
      li.appendChild(a);
    } else {
      li.append(item.value);
    }

    list.appendChild(li);
  });

  const form = doc.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      const fullSubject = `[Portfolio] ${subject}`;
      const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
      const mailto = `mailto:${encodeURIComponent(contacts.email)}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
}

function initMenu() {
  const menuBtn = doc.getElementById("menuBtn");
  const nav = doc.getElementById("mainNav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches("a")) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

function initReveals() {
  const items = doc.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px"
    }
  );

  items.forEach((item) => observer.observe(item));
}

function animateCounters() {
  const values = doc.querySelectorAll(".stat-value[data-count]");
  if (!values.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  values.forEach((el) => {
    const target = Number(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1300;
    let start = 0;

    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const current = Math.floor(target * easeOut(progress));
      el.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  });
}

function initCursorFx() {
  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!isDesktop) return;

  const ring = doc.getElementById("cursorRing");
  const dot = doc.getElementById("cursorDot");
  if (!ring || !dot) return;

  doc.body.classList.add("cursor-active");

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  const move = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };

  const tick = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(tick);
  };

  doc.addEventListener("mousemove", move);
  requestAnimationFrame(tick);

  const hoverables = doc.querySelectorAll("a, button, .project-card, .skill-card");
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("cursor-grow"));
    el.addEventListener("mouseleave", () => ring.classList.remove("cursor-grow"));
  });
}

function initLoader() {
  const loader = doc.getElementById("loader");
  const loaderInner = doc.getElementById("loaderInner");
  if (!loader || !loaderInner) return;

  if (portfolioData.site.loaderType === "name") {
    loaderInner.innerHTML = `<p class="name-loader">${portfolioData.profile.name}</p>`;
  } else {
    loaderInner.innerHTML = '<div class="pulse-loader"><span></span><span></span><span></span></div>';
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 850);
  });
}

function initYear() {
  setText("year", String(new Date().getFullYear()));
}

function init() {
  renderNav();
  renderHero();
  renderStats();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCerts();
  renderContact();

  initMenu();
  initLoader();
  initReveals();
  initCursorFx();
  initYear();

  setTimeout(animateCounters, 600);
}

init();
