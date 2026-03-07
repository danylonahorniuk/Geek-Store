// ===============================
// CART BADGE
// ===============================
(() => {
  const CART_KEY = "GEEK_STORE_CART";

  function readCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || {};
    } catch {
      return {};
    }
  }

  function cartCount(cart) {
    return Object.values(cart).reduce((sum, item) => sum + (item.qty || 0), 0);
  }

  function updateCartBadge() {
    const badge = document.getElementById("cartBadge");
    if (!badge) return;

    const cart = readCart();
    const count = cartCount(cart);

    if (count > 0) {
      badge.hidden = false;
      badge.textContent = count > 99 ? "99+" : String(count);
    } else {
      badge.hidden = true;
      badge.textContent = "0";
    }
  }

  // Оновити після завантаження сторінки
  document.addEventListener("DOMContentLoaded", updateCartBadge);

  // Оновити, якщо інша вкладка змінила localStorage
  window.addEventListener("storage", updateCartBadge);

  // Даємо глобальний доступ, щоб інші скрипти могли викликати вручну
  window.updateCartBadge = updateCartBadge;
})();