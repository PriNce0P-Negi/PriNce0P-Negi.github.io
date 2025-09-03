// small UI helpers: mobile nav toggle, fade-in animations, fill year
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if(navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      if(open) {
        mobileNav.hidden = true;
      } else {
        mobileNav.hidden = false;
      }
    });
  }

  // intersection observer for fade-in elements
  const faders = document.querySelectorAll('.fade-in');
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -20px 0px" };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, observerOptions);

  faders.forEach(el => io.observe(el));
});
