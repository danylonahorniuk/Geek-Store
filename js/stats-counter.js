// ======================================
// STATS COUNTER (count-up on scroll)
// ======================================

(() => {

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const values = statsSection.querySelectorAll(".stat-value");
  if (!values.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function parseValue(text) {

    const trimmed = String(text).trim();

    const suffixMatch = trimmed.match(/[^\d.,\s]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";

    const numberPart = trimmed.replace(/[^\d.,]/g, "");
    const num = parseInt(numberPart.replace(/[^\d]/g, ""), 10) || 0;

    return { num, suffix };

  }

  function formatNumber(n) {
    return new Intl.NumberFormat("en-US").format(n);
  }

  function animateCount(el, to, suffix, duration = 1200) {

    const start = performance.now();
    const from = 0;

    function tick(now) {

      const t = Math.min(1, (now - start) / duration);

      const eased = 1 - Math.pow(1 - t, 3);

      const current = Math.round(from + (to - from) * eased);

      el.textContent = `${formatNumber(current)}${suffix}`;

      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = `${formatNumber(to)}${suffix}`;

    }

    requestAnimationFrame(tick);

  }

  values.forEach((el, i) => {
    el.dataset.delay = i * 120;
  });

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      statsSection.classList.add("is-counting");

      values.forEach(el => {

        if (el.dataset.counted === "1") return;

        const { num, suffix } = parseValue(el.textContent);

        if (prefersReduced) {

          el.textContent = `${formatNumber(num)}${suffix}`;

        } else {

          const delay = Number(el.dataset.delay || 0);

          setTimeout(() => {
            animateCount(el, num, suffix);
          }, delay);

        }

        el.dataset.counted = "1";

      });

      observer.disconnect();

      setTimeout(() => {
        statsSection.classList.remove("is-counting");
      }, 1400);

    });

  }, {
    threshold: 0.35,
    rootMargin: "0px 0px -10% 0px"
  });

  observer.observe(statsSection);

})();