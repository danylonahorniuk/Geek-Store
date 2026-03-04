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


// ===============================
// STATS: count-up on scroll (once)
// ===============================
(() => {
  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const values = statsSection.querySelectorAll(".stat-value");
  if (!values.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Parse "10,000+", "5+", "850+" -> { num: 10000, suffix: "+" }
  function parseValue(text) {
    const trimmed = String(text).trim();
    const suffixMatch = trimmed.match(/[^\d.,\s]+$/); // "+" etc.
    const suffix = suffixMatch ? suffixMatch[0] : "";
    const numberPart = trimmed.replace(/[^\d.,]/g, ""); // keep digits and separators
    const num = parseInt(numberPart.replace(/[^\d]/g, ""), 10) || 0;
    return { num, suffix };
  }

  function formatNumber(n) {
    // 10000 -> "10,000"
    return new Intl.NumberFormat("en-US").format(n);
  }

  function animateCount(el, to, suffix, duration = 1100) {
    const start = performance.now();
    const from = 0;

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      // smooth easing
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(from + (to - from) * eased);

      el.textContent = `${formatNumber(current)}${suffix}`;

      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = `${formatNumber(to)}${suffix}`;
    }

    requestAnimationFrame(tick);
  }

  // Optional stagger for premium feel
  values.forEach((el, i) => {
    el.dataset.delay = String(i * 120);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;

        // add class for optional CSS micro-effect
        statsSection.classList.add("is-counting");

        values.forEach((el) => {
          if (el.dataset.counted === "1") return;

          const { num, suffix } = parseValue(el.textContent);

          if (prefersReduced) {
            el.textContent = `${formatNumber(num)}${suffix}`;
          } else {
            const delay = Number(el.dataset.delay || 0);
            setTimeout(() => animateCount(el, num, suffix), delay);
          }

          el.dataset.counted = "1";
        });

        io.disconnect();

        // remove counting class after animation ends
        setTimeout(() => statsSection.classList.remove("is-counting"), 1400);
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
  );

  io.observe(statsSection);
})();

