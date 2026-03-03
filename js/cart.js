// ===============================
// CART STORAGE
// ===============================
const CART_KEY = "GEEK_STORE_CART";
const PROMO_KEY = "GEEK_STORE_PROMO";

function readCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function cartCount(cart) {
  return Object.values(cart).reduce((s, it) => s + (it.qty || 0), 0);
}
function fmtUAH(n) {
  return new Intl.NumberFormat("uk-UA").format(Math.round(n)) + " ₴";
}

// ===============================
// UI refs
// ===============================
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartItemsCount = document.getElementById("cartItemsCount");

const freeShipBox = document.getElementById("freeShipBox");
const freeShipTitle = document.getElementById("freeShipTitle");
const freeShipText = document.getElementById("freeShipText");

const sumItems = document.getElementById("sumItems");
const sumShipping = document.getElementById("sumShipping");
const sumTotal = document.getElementById("sumTotal");
const lineDiscount = document.getElementById("lineDiscount");
const sumDiscount = document.getElementById("sumDiscount");

const promoInput = document.getElementById("promoInput");
const promoApply = document.getElementById("promoApply");
const promoHint = document.getElementById("promoHint");
const checkoutBtn = document.getElementById("checkoutBtn");

// ===============================
// Config
// ===============================
const FREE_SHIPPING_FROM = 2000;
const SHIPPING_COST = 150;

// промо приклад
const PROMOS = {
  "GEEK10": 0.10,  // -10%
  "GEEK15": 0.15
};

function getPromo() {
  return (localStorage.getItem(PROMO_KEY) || "").trim().toUpperCase();
}
function setPromo(code) {
  localStorage.setItem(PROMO_KEY, (code || "").trim().toUpperCase());
}

// ===============================
// Render
// ===============================
function calcTotals(cart) {
  const items = Object.values(cart);

  const itemsSum = items.reduce((s, it) => s + (it.price * it.qty), 0);

  const promoCode = getPromo();
  const promoPct = PROMOS[promoCode] || 0;
  const discount = itemsSum * promoPct;

  const afterDiscount = Math.max(0, itemsSum - discount);
  const shipping = afterDiscount >= FREE_SHIPPING_FROM || afterDiscount === 0 ? 0 : SHIPPING_COST;
  const total = afterDiscount + shipping;

  return { itemsSum, discount, shipping, total, promoCode, promoPct };
}

function renderCart() {
  const cart = readCart();
  const count = cartCount(cart);
  cartItemsCount.textContent = String(count);

  // empty
  if (count === 0) {
    cartList.innerHTML = "";
    cartEmpty.hidden = false;
    freeShipBox.hidden = true;

    sumItems.textContent = fmtUAH(0);
    sumShipping.textContent = fmtUAH(0);
    sumTotal.textContent = fmtUAH(0);
    lineDiscount.hidden = true;
    return;
  }

  cartEmpty.hidden = true;

  // list
  const items = Object.values(cart);
  cartList.innerHTML = items.map(it => {
    const unit = it.price;
    const line = it.price * it.qty;

    const uni = (it.universe === "Gaming") ? "Ігри" : it.universe;

    return `
      <div class="cart-item" data-id="${it.id}">
        <div class="cart-thumb">
          <img src="${it.image}" alt="${it.title}">
        </div>

        <div class="cart-info">
          <h3 class="cart-title" title="${it.title}">${it.title}</h3>

          <div class="cart-meta">
            <span class="pill">${uni}</span>
            <span>•</span>
            <span>${it.category}</span>
          </div>

          <div class="qty">
            <button class="qty-btn" type="button" data-dec aria-label="Зменшити">−</button>
            <div class="qty-num">${it.qty}</div>
            <button class="qty-btn" type="button" data-inc aria-label="Збільшити">+</button>
          </div>
        </div>

        <div class="cart-rightCol">
          <div class="cart-price">
            <strong>${fmtUAH(line)}</strong>
            <span>${fmtUAH(unit)} за шт.</span>
          </div>

          <button class="trash" type="button" data-remove aria-label="Видалити">
            <svg viewBox="0 0 24 24">
              <path d="M4 7h16"></path>
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M6 7l1 14h10l1-14"></path>
              <path d="M9 7V5h6v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // totals
  const t = calcTotals(cart);

  sumItems.textContent = fmtUAH(t.itemsSum);
  sumShipping.textContent = (t.shipping === 0 ? "Безкоштовно" : fmtUAH(t.shipping));
  sumTotal.textContent = fmtUAH(t.total);

  if (t.discount > 0) {
    lineDiscount.hidden = false;
    sumDiscount.textContent = "− " + fmtUAH(t.discount);
  } else {
    lineDiscount.hidden = true;
  }

  // free ship box
  freeShipBox.hidden = false;
  if (t.total >= FREE_SHIPPING_FROM || t.shipping === 0) {
    freeShipTitle.textContent = `Безкоштовна доставка від ${FREE_SHIPPING_FROM} ₴`;
    freeShipText.textContent = "🎉 Вітаємо! Ви отримали безкоштовну доставку!";
  } else {
    const left = Math.max(0, FREE_SHIPPING_FROM - (t.itemsSum - t.discount));
    freeShipTitle.textContent = `Безкоштовна доставка від ${FREE_SHIPPING_FROM} ₴`;
    freeShipText.textContent = `Додайте ще на ${fmtUAH(left)}, щоб доставка була безкоштовною`;
  }

  // promo UI
  promoInput.value = getPromo();
  promoHint.textContent = t.promoPct > 0 ? `Активовано промокод ${t.promoCode} (−${Math.round(t.promoPct * 100)}%)` : "";
}

// ===============================
// Actions
// ===============================
function incItem(id) {
  const cart = readCart();
  if (!cart[id]) return;
  cart[id].qty += 1;
  writeCart(cart);
  renderCart();
}
function decItem(id) {
  const cart = readCart();
  if (!cart[id]) return;
  cart[id].qty -= 1;
  if (cart[id].qty <= 0) delete cart[id];
  writeCart(cart);
  renderCart();
}
function removeItem(id) {
  const cart = readCart();
  if (!cart[id]) return;
  delete cart[id];
  writeCart(cart);
  renderCart();
}

// click handlers (delegation)
document.addEventListener("click", (e) => {
  const row = e.target.closest(".cart-item");
  if (!row) return;
  const id = row.dataset.id;

  if (e.target.closest("[data-inc]")) incItem(id);
  if (e.target.closest("[data-dec]")) decItem(id);
  if (e.target.closest("[data-remove]")) removeItem(id);
});

// promo
promoApply?.addEventListener("click", () => {
  const code = (promoInput.value || "").trim().toUpperCase();
  if (!code) {
    setPromo("");
    promoHint.textContent = "";
    renderCart();
    return;
  }

  if (!PROMOS[code]) {
    promoHint.textContent = "Невірний промокод";
    setPromo("");
    renderCart();
    return;
  }

  setPromo(code);
  promoHint.textContent = `Застосовано: ${code}`;
  renderCart();
});

// init
renderCart();

// ===============================
// CHECKOUT MODAL (fake, accepts anything)
// ===============================
const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutHint = document.getElementById("checkoutHint");

function openCheckoutModal(){
  if (!checkoutModal) return;
  checkoutModal.classList.add("is-open");
  checkoutModal.setAttribute("aria-hidden", "false");
  document.documentElement.style.overflow = "hidden";
}

function closeCheckoutModal(){
  if (!checkoutModal) return;
  checkoutModal.classList.remove("is-open");
  checkoutModal.setAttribute("aria-hidden", "true");
  document.documentElement.style.overflow = "";
  if (checkoutHint) checkoutHint.textContent = "";
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-checkout-close]")) closeCheckoutModal();
});

// esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && checkoutModal?.classList.contains("is-open")) closeCheckoutModal();
});

// замінюємо твій alert на модалку
checkoutBtn?.addEventListener("click", () => {
  const cart = readCart();
  if (cartCount(cart) === 0) return; // відкривати тільки якщо є товари
  openCheckoutModal();
});

checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  // нічого не валідимо — приймаємо будь-що
  if (checkoutHint) checkoutHint.textContent = "✅ Замовлення прийнято (тестовий режим).";

  // якщо хочеш, можна очистити кошик:
  // writeCart({});
  // renderCart();

  // або закривати через 1.2с (якщо захочеш):
  // setTimeout(closeCheckoutModal, 1200);
});