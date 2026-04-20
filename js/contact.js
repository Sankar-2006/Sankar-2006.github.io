import { profileConfig } from "./config.js";

export function initProfileBindings() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const emailNodes = document.querySelectorAll("[data-bind='email']");
  emailNodes.forEach((node) => {
    node.textContent = profileConfig.email;
    node.setAttribute("href", `mailto:${profileConfig.email}`);
  });

  const phoneNodes = document.querySelectorAll("[data-bind='phone']");
  phoneNodes.forEach((node) => {
    node.textContent = profileConfig.phone;
  });

  const locationNodes = document.querySelectorAll("[data-bind='location']");
  locationNodes.forEach((node) => {
    node.textContent = profileConfig.location;
  });

  const linkedinNodes = document.querySelectorAll("[data-bind='linkedin']");
  linkedinNodes.forEach((node) => {
    node.setAttribute("href", profileConfig.linkedin);
  });

  const githubNodes = document.querySelectorAll("[data-bind='github']");
  githubNodes.forEach((node) => {
    node.setAttribute("href", profileConfig.github);
  });

  const resumeNodes = document.querySelectorAll("[data-bind='resume']");
  resumeNodes.forEach((node) => {
    node.setAttribute("href", profileConfig.resume);
  });
}

export function initMailForm() {
  const form = document.getElementById("contactForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const senderEmail = String(data.get("senderEmail") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const fullSubject = `[Portfolio] ${subject}`;
    const body = [
      `Name: ${name}`,
      `Sender Email: ${senderEmail}`,
      "",
      message
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(profileConfig.email)}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
