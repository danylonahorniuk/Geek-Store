// ===== Universes: show more + featured switch + catalog filter link =====
(() => {
  const toggleBtn = document.getElementById("universesToggle");
  const moreBlock = document.getElementById("universeMore");

  if (toggleBtn && moreBlock) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = moreBlock.classList.toggle("is-open");

      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      moreBlock.setAttribute("aria-hidden", String(!isOpen));

      const label = isOpen ? "Згорнути " : "Показати більше ";
      for (const node of toggleBtn.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = label;
          break;
        }
      }
    });
  }

  const list = document.getElementById("universeList");
  const feature = document.getElementById("universeFeature");
  const img = document.getElementById("universeFeatureImg");
  const title = document.getElementById("universeFeatureTitle");
  const desc = document.getElementById("universeFeatureDesc");
  const count = document.getElementById("universeFeatureCount");

  if (!list || !feature || !img || !title || !desc || !count) return;

  function buildUniverseLink(universeFilter) {
    if (!universeFilter || universeFilter === "Всі всесвіти") {
      return "shop.html";
    }

    return `shop.html?universe=${encodeURIComponent(universeFilter)}`;
  }

  function applyItemNeon(item, accent) {
    const map = {
      violet: "rgba(167,139,250,.95)",
      blue: "rgba(56,189,248,.95)",
      green: "rgba(34,197,94,.95)",
      orange: "rgba(251,146,60,.95)",
    };

    const c = map[accent] || map.violet;
    item.style.setProperty("--item-neon", c);
  }

  const style = document.createElement("style");
  style.textContent = `
    .universe-item.is-active::before{
      background: var(--item-neon, rgba(167,139,250,.95)) !important;
      box-shadow: 0 0 18px color-mix(in srgb, var(--item-neon, rgba(167,139,250,.95)) 35%, transparent);
    }

    @supports not (color: color-mix(in srgb, red 50%, transparent)){
      .universe-item.is-active::before{
        box-shadow: 0 0 18px rgba(167,139,250,.22);
      }
    }
  `;
  document.head.appendChild(style);

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".universe-item");
    if (!btn) return;

    list.querySelectorAll(".universe-item").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    img.src = btn.dataset.img || "";
    img.alt = btn.dataset.title || "";
    img.style.objectPosition = btn.dataset.pos || "50% 35%";

    title.textContent = btn.dataset.title || "";
    desc.textContent = btn.dataset.desc || "";
    count.textContent = btn.dataset.count || "";

    const accent = btn.dataset.accent || "violet";
    const universeFilter = btn.dataset.universeFilter || "Всі всесвіти";

    feature.setAttribute("data-accent", accent);
    feature.href = buildUniverseLink(universeFilter);

    applyItemNeon(btn, accent);
  });

  const first = list.querySelector(".universe-item.is-active");
  if (first) {
    const accent = first.dataset.accent || "violet";
    const universeFilter = first.dataset.universeFilter || "Всі всесвіти";

    applyItemNeon(first, accent);
    feature.setAttribute("data-accent", accent);
    feature.href = buildUniverseLink(universeFilter);
  }
})();