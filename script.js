/* ====================================
   CHINTAMANJI ENTERPRISES — script.js
==================================== */

// ── Dynamic copyright year ──────────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Header scroll behaviour ─────────────────────────────────────
const header = document.querySelector(".header");

function handleHeaderScroll() {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleHeaderScroll, { passive: true });
handleHeaderScroll(); // run on load in case page is already scrolled

// ── Back-to-top button ──────────────────────────────────────────
const backToTopBtn = document.getElementById("backToTop");

function handleBackToTop() {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleBackToTop, { passive: true });

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── Close hamburger menu on nav link click ──────────────────────
const naviToggle = document.getElementById("navi-toggle");
const navLinks   = document.querySelectorAll(".navigation__link, .navigation__cta-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (naviToggle) naviToggle.checked = false;
  });
});

// ── Intersection Observer — fade-up entrance animations ─────────
const fadeEls = document.querySelectorAll(".fade-up");

if ("IntersectionObserver" in window && fadeEls.length) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });
}

// ── Staggered hero entrance (text blocks) ───────────────────────
(function heroEntrance() {
  const targets = [
    ".hero__eyebrow",
    ".hero__heading",
    ".hero__sub",
    ".hero__actions",
    ".hero__stats",
    ".hero__visual",
  ];

  targets.forEach(function (selector, i) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(3.2rem)";
    el.style.transition = "opacity 0.75s ease, transform 0.75s ease";

    setTimeout(function () {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200 + i * 130);
  });
})();
