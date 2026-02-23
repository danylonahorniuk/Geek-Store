// ======= DATA (приклад) =======
// Потім просто заміниш/розшириш масив товарами зі свого каталогу.
const PRODUCTS = [
  {
    id: "p1",
    title: "LEGO Star Wars Швидкісний мотоцикл Мандалорця й Ґроґу",
    price: 479,
    universe: "Star Wars",
    category: "LEGO",
    badge: "Новинка",
    image: "../assets/new-goods-home/LEGO-Star-Wars-mandos-spider.jpg",
    tags: ["lego", "mandalorian", "star wars", "sw"]
  },
  {
    id: "p2",
    title: "Фігурка Funko POP! Marvel: Avengers - Iron Man Special Edition",
    price: 1897,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "Топ продажів",
    image: "../assets/cataloge-goods/funko-iron-man.jpg",
    tags: ["funko", "iron man", "marvel"]
  },
  {
    id: "p3",
    title: "Постер The Dark Knight",
    price: 399,
    universe: "DC",
    category: "Постери",
    badge: "",
    image: "../assets/cataloge-goods/poster-batman.jpg",
    tags: ["poster", "batman", "dc"]
  },
  {
    id: "p4",
    title: "Фігурка Kratos God of War",
    price: 2640,
    universe: "Gaming",
    category: "Фігурки",
    badge: "",
    image: "../assets/cataloge-goods/Kratos-God-of-War.jpg",
    tags: ["kratos", "god of war", "gaming"]
  },
  {
    id: "p5",
    title: "Футболка Stranger Things",
    price: 699,
    universe: "Інше",
    category: "Одяг",
    badge: "",
    image: "../assets/cataloge-goods/Футболка-Stranger-Things.webp",
    tags: ["tshirt", "stranger things", "clothes"]
  },
  {
    id: "p6",
    title: "Шолом Hasbro Star Wars Black Series The Mandalorian",
    price: 7696,
    universe: "Star Wars",
    category: "Аксесуари",
    badge: "Новинка",
    image: "../assets/new-goods-home/mando-helmet1.1.webp",
    tags: ["helmet", "mandalorian", "star wars"]
  },
  {
    id: "p7",
    title: "Комікс Ultimate Spider-Man by Jonathan Hickman Vol. 1",
    price: 1361,
    universe: "Marvel",
    category: "Комікси",
    badge: "",
    image: "../assets/cataloge-goods/comic-spider-man2.jpg",
    tags: ["comic", "spiderman", "marvel"]
  },
  {
    id: "p8",
    title: "Чарівна паличка Wizarding world Гаррі Поттера",
    price: 499,
    universe: "Harry Potter",
    category: "Аксесуари",
    badge: "Топ продажів",
    image: "../assets/cataloge-goods/паличка-поттера.webp",
    tags: ["wand", "harry potter", "hp"]
  },
  {
    id: "p9",
    title: "Фігурка Funko Pop Доббі",
    price: 750,
    universe: "Harry Potter",
    category: "Аксесуари",
    badge: "Новинка",
    image: "../assets/new-goods-home/dobby-funkopop.webp",
    tags: ["funko", "harry potter", "hp"]
  },
  {
    id: "p10",
    title: "Ігра Sony PlayStation 5 Marvel’s Spider-Man 2",
    price: 1790,
    universe: "Gaming", 
    category: "Ігри",
    badge: "",
    image: "../assets/cataloge-goods/ps5-marvel-s-spider-man-2-bd-disk.webp",
    tags: ["PlayStation 5", "spiderman", "gaming", "marvel"]
  },
  {
    id: "p11",
    title: "Ігра Sony PlayStation 5 Marvel's Spider-Man: Miles Morales",
    price: 1299,
    universe: "Gaming", 
    category: "Ігри",
    badge: "",
    image: "../assets/cataloge-goods/ps5-marvel-spider-man-miles-morales-disk.webp",
    tags: ["PlayStation 5", "spiderman", "gaming", "marvel"]
  },
  {
    id: "p12",
    title: "Sony PlayStation 5 Slim Blu-ray 1TB White",
    price: 25499,
    universe: "Gaming", 
    category: "Ігри",
    badge: "",
    image: "../assets/cataloge-goods/ps5.png",
    tags: ["PlayStation 5", "gaming",]
  },
  {
    id: "p13",
    title: "Футболка Batman",
    price: 499,
    universe: "DC",
    category: "Одяг",
    badge: "",
    image: "../assets/cataloge-goods/T-Shirts _ Official  The Dark Knight's Rogues Gallery Cover Unisex T-Shirt _ Batman.jpg",
    tags: ["tshirt", "dc", "clothes"]
  },
  {
    id: "p14",
    title: "LEGO Minifigures Людина-павук: Крізь Всесвіт",
    price: 129,
    universe: "Marvel",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-minifigures-spiderman.webp",
    tags: [ "spiderman", "lego", "marvel"]
  },

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
  const icons = {
    all: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l9 6-9 6-9-6 9-6z"></path>
        <path d="M3 9v6l9 6 9-6V9"></path>
      </svg>
    `,
    lego: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="9" width="16" height="11" rx="2"></rect>
        <rect x="7" y="5" width="3" height="4" rx="1"></rect>
        <rect x="14" y="5" width="3" height="4" rx="1"></rect>
      </svg>
    `,
    mask: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7c3-2 5-3 8-3s5 1 8 3v5c0 5-3 9-8 9s-8-4-8-9V7z"></path>
        <path d="M8.5 12.2h.01"></path>
        <path d="M15.5 12.2h.01"></path>
        <path d="M9 15c1.2 1 2.2 1.5 3 1.5S13.8 16 15 15"></path>
      </svg>
    `,
    poster: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2"></rect>
        <path d="M8 14l2-2 3 3 2-2 2 2"></path>
        <path d="M9 9h.01"></path>
      </svg>
    `,
    comics: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4h12v16H6z"></path>
        <path d="M9 8h6"></path>
        <path d="M9 12h6"></path>
        <path d="M9 16h4"></path>
      </svg>
    `,
    figure: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
        <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
      </svg>
    `,
    tshirt: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5l4 2 4-2 3 3-2 2v12H7V10L5 8l3-3z"></path>
      </svg>
    `,
    bag: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12l-1 14H7L6 7z"></path>
        <path d="M9 7a3 3 0 0 1 6 0"></path>
      </svg>
    `
  };

  const categories = [
    { key: "Всі категорії", icon: icons.all },
    { key: "LEGO", icon: icons.lego },
    { key: "Funko Pop", icon: icons.mask },
    { key: "Постери", icon: icons.poster },
    { key: "Комікси", icon: icons.comics },
    { key: "Фігурки", icon: icons.figure },
    { key: "Одяг", icon: icons.tshirt },
    { key: "Аксесуари", icon: icons.bag }
  ];

  categoryList.innerHTML = categories.map(c => `
    <button class="filter-item ${c.key === state.category ? "is-active" : ""}"
            type="button"
            data-category="${c.key}">
      <span class="filter-icon" aria-hidden="true">${c.icon}</span>
      <span class="filter-text">${c.key}</span>
    </button>
  `).join("");

  // ⚠️ Важливо: не множимо listener при повторному рендері
  if (!categoryList.dataset.bound) {
    categoryList.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      state.category = btn.dataset.category;
      syncActiveStates();
      render();
    });
    categoryList.dataset.bound = "1";
  }
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