// ======= DATA (приклад) =======
// Потім просто заміниш/розшириш масив товарами зі свого каталогу.
const PRODUCTS = [
  {
    id: "p1",
    title: "LEGO Star Wars Millennium Falcon",
    price: 12999,
    universe: "Star Wars",
    category: "LEGO",
    badge: "Новинка",
    image: "https://images.unsplash.com/photo-1520975693411-b4ed88b5f0cf?auto=format&fit=crop&w=1200&q=80",
    tags: ["lego", "falcon", "star wars", "sw"]
  },
  {
    id: "p2",
    title: "Funko Pop! Iron Man",
    price: 599,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "Топ продажів",
    image: "https://images.unsplash.com/photo-1520975688781-7f5b0b8a5f63?auto=format&fit=crop&w=1200&q=80",
    tags: ["funko", "iron man", "marvel"]
  },
  {
    id: "p3",
    title: "Постер The Dark Knight",
    price: 399,
    universe: "DC",
    category: "Постери",
    badge: "",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    tags: ["poster", "batman", "dc"]
  },
  {
    id: "p4",
    title: "Фігурка Kratos God of War",
    price: 3999,
    universe: "Gaming",
    category: "Фігурки",
    badge: "",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    tags: ["kratos", "god of war", "gaming"]
  },
  {
    id: "p5",
    title: "Футболка Stranger Things",
    price: 699,
    universe: "Інше",
    category: "Одяг",
    badge: "",
    image: "https://images.unsplash.com/photo-1520975743539-7f3f8b5d1cbb?auto=format&fit=crop&w=1200&q=80",
    tags: ["tshirt", "stranger things", "clothes"]
  },
  {
    id: "p6",
    title: "Термос Lightsaber",
    price: 899,
    universe: "Star Wars",
    category: "Аксесуари",
    badge: "Новинка",
    image: "https://images.unsplash.com/photo-1520975686261-0c2f3fa2b7b0?auto=format&fit=crop&w=1200&q=80",
    tags: ["thermos", "lightsaber", "star wars"]
  },
  {
    id: "p7",
    title: "Комікс Spider-Man: Homecoming",
    price: 449,
    universe: "Marvel",
    category: "Комікси",
    badge: "",
    image: "https://images.unsplash.com/photo-1520975666598-9c0f33e32e3c?auto=format&fit=crop&w=1200&q=80",
    tags: ["comic", "spiderman", "marvel"]
  },
  {
    id: "p8",
    title: "Паличка Герміони",
    price: 999,
    universe: "Harry Potter",
    category: "Аксесуари",
    badge: "Топ продажів",
    image: "https://images.unsplash.com/photo-1520975659129-7d33dcb162d4?auto=format&fit=crop&w=1200&q=80",
    tags: ["wand", "hermione", "hp"]
  }
];

// ======= UI refs =======
const productsGrid = document.getElementById("productsGrid");
const foundCount = document.getElementById("foundCount");
const emptyState = document.getElementById("emptyState");
const resetBtn = document.getElementById("resetBtn");

const universeRow = document.getElementById("universeRow");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

// ======= State =======
const state = {
  universe: "Всі всесвіти",
  category: "Всі категорії",
  query: ""
};

// ======= Helpers =======
const fmtUAH = (n) => new Intl.NumberFormat("uk-UA").format(n) + " ₴";

function normalize(str) {
  return (str || "")
    .toString()
    .trim()
    .toLowerCase();
}

function matchesQuery(product, q) {
  if (!q) return true;
  const hay = [
    product.title,
    product.universe,
    product.category,
    ...(product.tags || [])
  ].map(normalize).join(" ");
  return hay.includes(normalize(q));
}

// ======= Build pills + categories =======
function buildUniversePills() {
  const universes = ["Всі всесвіти", "Marvel", "Star Wars", "DC", "Аніме", "Ігри", "Інше"];

  // counts from PRODUCTS (optional)
  const counts = universes.reduce((acc, u) => {
    if (u === "Всі всесвіти") acc[u] = PRODUCTS.length;
    else acc[u] = PRODUCTS.filter(p => p.universe === u || (u === "Ігри" && p.universe === "Gaming")).length;
    return acc;
  }, {});

  universeRow.innerHTML = universes.map(u => {
    const label = u;
    const count = counts[u] ?? 0;

    return `
      <button class="pill ${u === state.universe ? "is-active" : ""}"
              type="button"
              data-universe="${u}">
        <strong>${label}</strong>
        <span>${count} товарів</span>
      </button>
    `;
  }).join("");

  universeRow.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-universe]");
    if (!btn) return;
    state.universe = btn.dataset.universe;
    syncActiveStates();
    render();
  });
}

function buildCategoryFilters() {
  const categories = [
    { key: "Всі категорії", icon: "🎯" },
    { key: "LEGO", icon: "🧱" },
    { key: "Funko Pop", icon: "🎭" },
    { key: "Постери", icon: "🖼️" },
    { key: "Комікси", icon: "📚" },
    { key: "Фігурки", icon: "🎪" },
    { key: "Одяг", icon: "👕" },
    { key: "Аксесуари", icon: "🎒" }
  ];

  categoryList.innerHTML = categories.map(c => `
    <button class="filter-item ${c.key === state.category ? "is-active" : ""}"
            type="button"
            data-category="${c.key}">
      <span class="filter-emoji" aria-hidden="true">${c.icon}</span>
      ${c.key}
    </button>
  `).join("");

  categoryList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    state.category = btn.dataset.category;
    syncActiveStates();
    render();
  });
}

function syncActiveStates() {
  // pills
  universeRow.querySelectorAll(".pill").forEach(b => {
    b.classList.toggle("is-active", b.dataset.universe === state.universe);
  });

  // categories
  categoryList.querySelectorAll(".filter-item").forEach(b => {
    b.classList.toggle("is-active", b.dataset.category === state.category);
  });
}

// ======= Render =======
function filterProducts() {
  return PRODUCTS.filter(p => {
    // universe
    if (state.universe !== "Всі всесвіти") {
      // mapping: "Ігри" pill -> universe "Gaming"
      if (state.universe === "Ігри") {
        if (p.universe !== "Gaming") return false;
      } else {
        if (p.universe !== state.universe) return false;
      }
    }

    // category
    if (state.category !== "Всі категорії") {
      if (p.category !== state.category) return false;
    }

    // query
    if (!matchesQuery(p, state.query)) return false;

    return true;
  });
}

function renderProducts(items) {
  productsGrid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.image}" alt="${p.title}">
        ${p.badge ? `<div class="product-pill">${p.badge}</div>` : ""}
      </div>

      <div class="product-body">
        <div class="product-meta">${p.universe} • ${p.category}</div>
        <h3 class="product-title">${p.title}</h3>

        <div class="product-bottom">
          <div class="product-price">${fmtUAH(p.price)}</div>
          <button class="buy-btn" type="button" data-buy="${p.id}">Купити</button>
        </div>
      </div>
    </article>
  `).join("");

  productsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-buy]");
    if (!btn) return;
    const id = btn.dataset.buy;
    // тут потім підв’яжеш кошик/модалку
    alert("Додано в кошик: " + id);
  }, { once: true });
}

function render() {
  const items = filterProducts();
  foundCount.textContent = String(items.length);

  if (items.length === 0) {
    productsGrid.innerHTML = "";
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    renderProducts(items);
  }
}

// ======= Search wiring =======
searchForm.addEventListener("submit", (e) => e.preventDefault());

let t = null;
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  // легкий debounce
  clearTimeout(t);
  t = setTimeout(() => {
    state.query = value;
    render();
  }, 120);
});

// reset
resetBtn.addEventListener("click", () => {
  state.universe = "Всі всесвіти";
  state.category = "Всі категорії";
  state.query = "";
  searchInput.value = "";
  syncActiveStates();
  render();
});

// init
buildUniversePills();
buildCategoryFilters();
render();