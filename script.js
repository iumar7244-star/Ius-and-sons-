const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const form = document.getElementById("registrationForm");
const success = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const program = data.get("program");
  const phone = data.get("phone");

  const message =
`IUS AND SONS HOLIDAY PROGRAM 2026

Student: ${name}
Age: ${data.get("age")}
Parent/Guardian: ${data.get("guardian")}
Phone: ${phone}
Program: ${program}
Message: ${data.get("message") || "None"}`;

  // Change this number to the school's WhatsApp number.
  const whatsappNumber = "256000000000";

  if (whatsappNumber !== "256000000000") {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  } else {
    success.style.display = "block";
    success.textContent = "✓ Details prepared. Add your real WhatsApp number in script.js to send registrations directly to WhatsApp.";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {threshold: 0.08});

document.querySelectorAll(".course-card,.gallery-tile,.feature-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(14px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = `.visible{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
