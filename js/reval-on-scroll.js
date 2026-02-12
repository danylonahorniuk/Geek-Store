// ====== REVEAL ON SCROLL (IntersectionObserver) ======
(() => {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  // Якщо користувач просить без анімацій — просто показуємо все
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduceMotion) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); // один раз і все
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px", // щоб трохи раніше спрацьовувало
    }
  );

  elements.forEach(el => observer.observe(el));
})();
