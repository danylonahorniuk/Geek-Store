// ===============================
// STORES: "Як доїхати" -> Google Maps route
// ===============================
(() => {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".store-route-btn");
    if (!btn) return;

    const dest = btn.dataset.dest;
    if (!dest) return;

    const url =
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(dest);

    window.open(url, "_blank", "noopener");
  });
})();