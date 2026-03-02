// ===============================
// HOME: QUICK BUY + SLIDERS + CART (no products.js, no shop.js)
// ===============================

const modal = document.getElementById("quickBuyModal");
let activeCardData = null;

// ===============================
// CART STORAGE (same key as cart page)
// ===============================
const CART_KEY = "GEEK_STORE_CART";

function readCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// додаємо в кошик з даних карточки (без PRODUCTS)
function addToCartFromCardData(data) {
  if (!data?.id) return false;

  const cart = readCart();

  if (cart[data.id]) {
    cart[data.id].qty += 1;
  } else {
    cart[data.id] = {
      id: data.id,
      title: data.title || "",
      price: Number(data.price || 0),
      image: data.image || "",
      // на головній цього нема — ставимо дефолт
      universe: data.universe || "Інше",
      category: data.category || "Товари",
      qty: 1
    };
  }

  writeCart(cart);
  return true;
}

// ================= SLIDER (UNIVERSAL) =================
function slideProducts(sliderId, dir) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const card = slider.querySelector(".na-card, .ts-card");
  if (!card) return;

  const gap = parseFloat(getComputedStyle(slider).gap || 0);
  const step = card.offsetWidth + gap;

  slider.scrollBy({ left: dir * step, behavior: "smooth" });
}

// ================= OPEN MODAL (NA + TS) =================
function openQuickBuyFromButton(btn) {
  const card = btn.closest(".na-card, .ts-card");
  if (!card) return;

  // id
  let id = (card.dataset.id || "").trim();
  if (id && !id.startsWith("p")) id = "p" + id; // якщо раптом "45"

  // зберігаємо дані активної карточки
  activeCardData = {
    id,
    title: card.dataset.name || "",
    price: Number(card.dataset.price || 0),
    image: card.dataset.image || "",
    description: card.dataset.description || ""
  };

  if (!activeCardData.id) {
    console.warn("[home] No data-id on card.");
  }

  // наповнення модалки
  document.getElementById("qbTitle").textContent = activeCardData.title;
  document.getElementById("qbDesc").textContent = activeCardData.description;
  document.getElementById("qbPrice").textContent = activeCardData.price.toLocaleString() + " ₴";

  const img = document.getElementById("qbImage");
  img.src = activeCardData.image;
  img.alt = activeCardData.title;

  modal.classList.add("active");
}

// делегування: працює і для на, і для тс
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".na-quick, .ts-quick");
  if (!btn) return;

  e.stopPropagation();
  openQuickBuyFromButton(btn);
});

// ================= CLOSE MODAL =================
function closeModal() {
  modal.classList.remove("active");
  activeCardData = null;
}

modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ================= ADD TO CART =================
document.querySelector(".qb-add")?.addEventListener("click", () => {
  if (!activeCardData?.id) {
    console.warn("[home] No activeCardData/id.");
    return;
  }

  const ok = addToCartFromCardData(activeCardData);

  if (ok) {
    if (typeof showToast === "function") {
      showToast("Товар додано в кошик");
    }
    // НЕ закриваємо модалку
  }
});