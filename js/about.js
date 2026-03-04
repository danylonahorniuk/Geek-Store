// TIMELINE reveal on scroll
(() => {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
  if (e.isIntersecting) {
    e.target.classList.add("is-active");
    io.unobserve(e.target);
  }
});
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  items.forEach((it) => io.observe(it));
})();


