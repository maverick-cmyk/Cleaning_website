const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const scrollTopButton = document.querySelector(".scroll-top");
const loader = document.querySelector(".loader");
const cookieBanner = document.querySelector(".cookie-banner");
const cookieAccept = document.querySelector(".cookie-accept");
const sections = document.querySelectorAll(".section-animate");
const counters = document.querySelectorAll(".counter");
const comparisonSlider = document.querySelector(".comparison__slider");
const comparisonAfter = document.querySelector(".comparison__after");
const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");

let testimonialIndex = 0;
let testimonialTimer;

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hidden"), 500);
});

const handleScroll = () => {
  const scrolled = window.scrollY > 16;
  header.classList.toggle("scrolled", scrolled);
  scrollTopButton.classList.toggle("visible", window.scrollY > 600);
};

handleScroll();
window.addEventListener("scroll", handleScroll, { passive: true });

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });
}

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const suffix = target === 99 ? "%" : "+";
    const duration = 1600;
    const start = performance.now();

    const updateCounter = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
    observer.unobserve(counter);
  });
}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.18 });

sections.forEach((section) => revealObserver.observe(section));

if (comparisonSlider && comparisonAfter) {
  comparisonSlider.addEventListener("input", (event) => {
    comparisonAfter.style.width = `${event.target.value}%`;
  });
}

const showTestimonial = (index) => {
  testimonials.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });
};

const advanceTestimonial = (direction = 1) => {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
};

const startTestimonialLoop = () => {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => advanceTestimonial(1), 5000);
};

if (testimonials.length) {
  showTestimonial(testimonialIndex);
  startTestimonialLoop();
}

prevButton?.addEventListener("click", () => {
  advanceTestimonial(-1);
  startTestimonialLoop();
});

nextButton?.addEventListener("click", () => {
  advanceTestimonial(1);
  startTestimonialLoop();
});

if (cookieBanner && cookieAccept) {
  const acceptedCookies = localStorage.getItem("cookie-consent");
  if (acceptedCookies === "accepted") {
    cookieBanner.style.display = "none";
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    cookieBanner.style.display = "none";
  });
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
