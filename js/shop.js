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
    tags: ["helmet", "mandalorian", "star wars", "sw"]
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
    universe: "Інше",
    category: "Аксесуари",
    badge: "Топ продажів",
    image: "../assets/cataloge-goods/паличка-поттера.webp",
    tags: ["wand", "harry potter", "hp"]
  },
  {
    id: "p9",
    title: "Фігурка Funko Pop Доббі",
    price: 750,
    universe: "Інше",
    category: "Funko Pop",
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
    tags: ["PlayStation 5", "spiderman", "gaming", "marvel"],

    desc: "Екшен-гра для PS5. Пітер Паркер і Майлз Моралес проти нових ворогів.",
    inStock: true,
    rating: 4.8,
    reviews: 312,
    specs: [
      "Платформа: PlayStation 5",
      "Жанр: Action / Adventure",
      "Мова: Англійська (саб/укр. залежить від видання)"
    ],
    benefits: [
      { dot: "#22c55e", title: "Швидка доставка", text: "1–2 дні по Україні" },
      { dot: "#3b82f6", title: "Оригінальний диск", text: "Запаковано, нове" },
      { dot: "#a855f7", title: "Підтримка", text: "Допоможемо з оплатою/доставкою" }
    ]
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
    tags: ["PlayStation 5", "gaming"]
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
    badge: "Топ продажів",
    image: "../assets/cataloge-goods/lego-minifigures-spiderman.webp",
    tags: ["spiderman", "lego", "marvel"]
  },
  {
    id: "p15",
    title: "LEGO Star Wars Джедайский перехватчик Асоки",
    price: 1749,
    universe: "Star Wars",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-ahsoka.webp",
    tags: ["lego", "ahsoka", "star wars", "sw"]
  },
  {
    id: "p16",
    title: "Геймпад Бездротовий Sony PlayStation 5 DualSense",
    price: 3299,
    universe: "Gaming",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/gamepad.webp",
    tags: ["PlayStation 5", "gaming"]
  },
  {
    id: "p17",
    title: "Фігурка Funko Pop Batman 80th Batman 1989",
    price: 1395,
    universe: "DC",
    category: "Funko Pop",
    badge: "Новинка",
    image: "../assets/cataloge-goods/funko-batman.webp",
    tags: ["funko", "batman", "dc"]
  },
  {
    id: "p18",
    title: "Чашка Marvel",
    price: 280,
    universe: "Marvel",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/marvel-mug.jpg",
    tags: ["mug", "marvel"]
  },
  {
    id: "p19",
    title: "Іграшка-фігурка Star Wars Grogu",
    price: 1643,
    universe: "Star Wars",
    category: "Фігурки",
    badge: "Новинка",
    image: "../assets/new-goods-home/grogu.jpg",
    tags: ["Grogu", "mandalorian", "star wars", "sw"]
  },
  {
    id: "p20",
    title: "Футболка Batman",
    price: 459,
    universe: "Marvel",
    category: "Одяг",
    badge: "",
    image: "../assets/cataloge-goods/футболка-marvel.jpg",
    tags: ["tshirt", "marvel", "clothes"]
  },
  {
    id: "p21",
    title: "Футболка Star Wars",
    price: 469,
    universe: "Star Wars",
    category: "Одяг",
    badge: "",
    image: "../assets/cataloge-goods/футболка-star-wars.jpg",
    tags: ["tshirt", "star wars", "sw", "clothes"]
  },
  {
    id: "p22",
    title: "Постер Marvel ",
    price: 390,
    universe: "Marvel",
    category: "Постери",
    badge: "",
    image: "../assets/cataloge-goods/poster-marvel.jpg",
    tags: ["poster", "avengers", "marvel"]
  },
  {
    id: "p23",
    title: "LEGO Star Wars Death Star UCS",
    price: 53325,
    universe: "Star Wars",
    category: "LEGO",
    badge: "Новинка",
    image: "../assets/new-goods-home/death-star-usc1.png",
    tags: ["lego", "Death Star", "star wars", "sw"]
  },
  {
    id: "p24",
    title: "Шолом Hasbro Ant-Man Marvel Legends Series Electronic Helmet",
    price: 4297,
    universe: "Marvel",
    category: "Аксесуари",
    badge: "Новинка",
    image: "../assets/new-goods-home/ant-man.jpg",
    tags: ["helmet", "antman", "marvel"]
  },
  {
    id: "p25",
    title: "Книга The DC Comics Encyclopedia (New Edition)",
    price: 1823,
    universe: "DC",
    category: "Комікси",
    badge: "",
    image: "../assets/cataloge-goods/the-dc-comics-encyclopedia-new-edition.jpg",
    tags: ["comic", "dc",]
  },
  {
    id: "p26",
    title: "Набір стікерів The Lord of The Rings",
    price: 50,
    universe: "Інше",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/stikers-The Lord of The Rings.jpg",
    tags: ["comic", "dc", "stikers"]
  },
  {
    id: "p27",
    title: "Фігурка Bandai: Anime Heroes: Naruto Uzumaki",
    price: 1690,
    universe: "Аніме",
    category: "Фігурки",
    badge: "",
    image: "../assets/cataloge-goods/naruto.jpg",
    tags: ["naruto uzumaki", "anime",]
  },
  {
    id: "p28",
    title: "Фігурка Star Wars The Black Series Darth Vader (Duel’s End)",
    price: 1399,
    universe: "Star Wars",
    category: "Фігурки",
    badge: "",
    image: "../assets/cataloge-goods/figure-darth-vader.webp",
    tags: ["darth vader", "star wars", "sw"]
  },
  {
    id: "p29",
    title: "PlayStation Logo LED Light",
    price: 1200,
    universe: "Gaming",
    category: "Аксесуари",
    badge: "Топ продажів",
    image: "../assets/cataloge-goods/playstation-logo-led-light.jpg",
    tags: ["PlayStation", "gaming", "led light"]
  },
  {
    id: "p30",
    title: "Ігра Sony PlayStation 5 The Last Of Us Part I",
    price: 2199,
    universe: "Gaming",
    category: "Ігри",
    badge: "",
    image: "../assets/cataloge-goods/ps5-the-last-of-us-part-one.jpg",
    tags: ["PlayStation 5", "the last of us", "gaming"]
  },
  {
    id: "p31",
    title: "Ігра Sony PlayStation 5 The Last Of Us Part II Remastered",
    price: 1899,
    universe: "Gaming",
    category: "Ігри",
    badge: "",
    image: "../assets/cataloge-goods/ps5-the-last-of-us-part-two-remastered.jpg",
    tags: ["PlayStation 5", "the last of us", "gaming"]
  },
  {
    id: "p32",
    title: "Фігурка  Halo Infinite Master Chief Mjolnir MK VI",
    price: 1817,
    universe: "Інше",
    category: "Фігурки",
    badge: "",
    image: "../assets/cataloge-goods/halo-master-chief.jpg",
    tags: ["master chief", "halo"]
  },
  {
    id: "p33",
    title: "LEGO Marvel Логотип і мініфігурки MARVEL",
    price: 3919,
    universe: "Marvel",
    category: "LEGO",
    badge: "Новинка",
    image: "../assets/new-goods-home/lego-marvel-logo-set.jpg",
    tags: ["lego", "marvel"]
  },
  {
    id: "p34",
    title: "Набір стікерів Star Wars",
    price: 50,
    universe: "Star Wars",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/stikers-sw.jpg",
    tags: ["star wars", "sw", "stikers"]
  },
  {
    id: "p35",
    title: "Постер Naruto",
    price: 390,
    universe: "Аніме",
    category: "Постери",
    badge: "",
    image: "../assets/cataloge-goods/poster-naruto.jpg",
    tags: ["poster", "naruto", "anime"]
  },
  {
    id: "p36",
    title: "Брелок Funko Pocket POP! Keychain: Harry Potter",
    price: 395,
    universe: "Інше",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/keychain-hp.jpg",
    tags: ["keychain", "harrry potter",]
  },
  {
    id: "p37",
    title: "Брелок Lego Batman",
    price: 399,
    universe: "DC",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/keychain-lego-batman.jpg",
    tags: ["keychain", "dc", "batman"]
  },
  {
    id: "p38",
    title: "Комікс Таємні Війни",
    price: 990,
    universe: "Marvel",
    category: "Комікси",
    badge: "",
    image: "../assets/cataloge-goods/comic-spider-man-secret-war.jpg",
    tags: ["comic", "marvel", "spiderman"]
  },
  {
    id: "p39",
    title: "Комікс Відьмак. Дім зі Скла. Том 1",
    price: 500,
    universe: "Інше",
    category: "Комікси",
    badge: "",
    image: "../assets/cataloge-goods/Комікс-Відьмак.jpg",
    tags: ["comic", "the witcher"]
  },
  {
    id: "p40",
    title: "Комікс Відьмак. Лисячі Діти. Том 2",
    price: 500,
    universe: "Інше",
    category: "Комікси",
    badge: "",
    image: "../assets/cataloge-goods/Комікс-Відьмак2.jpg",
    tags: ["comic", "the witcher"]
  },
  {
    id: "p41",
    title: "Набір стікерів The Big Bang Theory",
    price: 50,
    universe: "Інше",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/stikers-the-big-bang-theory.jpg",
    tags: ["the big bang theory", "stikers"]
  },
  {
    id: "p42",
    title: "LEGO Marvel Вежа Месників",
    price: 25799,
    universe: "Marvel",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-avengers-tower.jpg",
    tags: ["lego", "marvel"]
  },
  {
    id: "p43",
    title: "Kinder Star Wars",
    price: 95,
    universe: "Star Wars",
    category: "Фігурки",
    badge: "Новинка",
    image: "../assets/new-goods-home/kinder-star-wars.webp",
    tags: ["kinder", "star wars", "sw"]
  },
  {
    id: "p44",
    title: "Kinder Joy Stranger Things",
    price: 125,
    universe: "Інше",
    category: "Фігурки",
    badge: "Новинка",
    image: "../assets/new-goods-home/kinder-sranger-things2.png",
    tags: ["kinder", "stranger things"]
  },
  {
    id: "p45",
    title: "LEGO Star Wars Бойовий загін бійців-клонів 501-го легіону",
    price: 750,
    universe: "Star Wars",
    category: "LEGO",
    badge: "Новинка",
    image: "../assets/new-goods-home/501-legion2.webp",
    tags: ["lego", "star wars", "sw"]
  },
  {
    id: "p46",
    title: "LEGO BrickHeadz Stranger Things",
    price: 3499,
    universe: "Інше",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-strangers-things.jpg",
    tags: ["lego", "stranger things",]
  },
  {
    id: "p47",
    title: "Фігурка Funko POP! Naruto Shippuden - Kakashi Hatake with Pakkun",
    price: 1300,
    universe: "Аніме",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-anime.jpg",
    tags: ["anime", "naruto"]
  },
  {
    id: "p48",
    title: "Брелок Funko Pop Naruto Uzumaki",
    price: 350,
    universe: "Аніме",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-anime-брелок.jpg",
    tags: ["keychain", "anime", "naruto"]
  },
  {
    id: "p49",
    title: "Фігурка Funko POP! Star Wars: Book of Boba Fett - Boba Fett",
    price: 1100,
    universe: "Star Wars",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-boba-fett.jpg",
    tags: ["star wars", "sw", "funko pop"]
  },
  {
    id: "p50",
    title: "Фігурка Funko POP! Marvel: Spider-Man with Gift",
    price: 649,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-spider-man.jpg",
    tags: ["spiderman", "marvel", "funko pop"]
  },
  {
    id: "p51",
    title: "Фігурка Funko POP! Spider-Man 2 Game Advanced Suit 2.0 Symbiote Takeover",
    price: 1225,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-spider-man-symbiot.jpg",
    tags: ["spiderman", "marvel", "funko pop"]
  },
  {
    id: "p52",
    title: "Фігурка Funko POP! Marvel Holiday Baby GROOT",
    price: 750,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-groot.jpg",
    tags: ["groot", "marvel", "funko pop"]
  },
  {
    id: "p53",
    title: "Фігурка Funko POP! Bobble Star Wars Mandalorian Child w/ Butterfly",
    price: 649,
    universe: "Star Wars",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-grogu.jpg",
    tags: ["grogu", "star wars", "sw", "funko pop"]
  },
  {
    id: "p54",
    title: "Фігурка Funko POP! Anime: Bleach - Toshiro Hitsugaya",
    price: 1000,
    universe: "Аніме",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-anime2.jpg",
    tags: ["anime"]
  },
  {
    id: "p55",
    title: "Геймпад Бездротовий Sony PlayStation 5 DualSense Galactic Purple",
    price: 3699,
    universe: "Gaming",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/gamepad- Galactic Purple.webp",
    tags: ["PlayStation 5", "gaming"]
  },
  {
    id: "p56",
    title: "Геймпад Бездротовий Sony PlayStation 5 DualSense Nova Pink",
    price: 3759,
    universe: "Gaming",
    category: "Аксесуари",
    badge: "",
    image: "../assets/cataloge-goods/gamepad-nova-pink.jpg",
    tags: ["PlayStation 5", "gaming"]
  },
  {
    id: "p57",
    title: "Фігурка Hot Toys 1/6 Iron Man 2 Mark 6",
    price: 15670,
    universe: "Marvel",
    category: "Фігурки",
    badge: "Новинка",
    image: "../assets/new-goods-home/iron-man-6.4.jpg",
    tags: ["hot toys", "iron man", "marvel"]
  },
  {
    id: "p58",
    title: "LEGO One Piece Піратський корабель «Всюдихідний Меррі»",
    price: 5279,
    universe: "Аніме",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-one-piece.jpg",
    tags: ["anime", "lego", "one piece"]
  },
  {
    id: "p59",
    title: "LEGO One Piece Цирковий намет клоуна Баґґі",
    price: 1999,
    universe: "Аніме",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-one-piece2.jpg",
    tags: ["anime", "lego", "one piece"]
  },
  {
    id: "p60",
    title: "LEGO One Piece Хатина у Селищі Вітряків",
    price: 1183,
    universe: "Аніме",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-one-piece3.jpg",
    tags: ["anime", "lego", "one piece"]
  },
  {
    id: "p61",
    title: "LEGO One Piece Битва в Арлонґ-парку",
    price: 3199,
    universe: "Аніме",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-one-piece4.jpg",
    tags: ["anime", "lego", "one piece"]
  },
  {
    id: "p62",
    title: "LEGO One Piece Плавучий ресторан «Бараті»",
    price: 12239,
    universe: "Аніме",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-one-piece5.jpg",
    tags: ["anime", "lego", "one piece"]
  },
  {
  id: "p63",
    title: "Фігурка Funko POP! Anime: DEMON SLAYER - TANJIRO KAMADO",
    price: 990,
    universe: "Аніме",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-anime3.jpg",
    tags: ["anime"]
  },
  {
  id: "p64",
    title: "LEGO DC Batman Бетмен Тумблер проти Дволикого і Джокера",
    price: 2699,
    universe: "DC",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/LEGO-DC-Batman-Tumbler.jpg",
    tags: ["dc", "lego", "batman"]
  },
  {
  id: "p65",
    title: "Фігурка Funko POP! DC: Patchwork Joker",
    price: 790,
    universe: "DC",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-joker.jpg",
    tags: ["dc", "funko pop", "joker"]
  },
  {
  id: "p66",
    title: "Фігурка Funko POP! DC: Флеш The Flash",
    price: 795,
    universe: "DC",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-flash.jpg",
    tags: ["dc", "funko pop", "flash"]
  },
  {
  id: "p67",
    title: "Фігурка Funko POP! DC: Superman 2025",
    price: 845,
    universe: "DC",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-super-man.jpg",
    tags: ["dc", "funko pop", "super man"]
  },
  {
  id: "p68",
    title: "Фігурка Funko POP! DC: Aquaman: Arthur Curry in Hero Suit",
    price: 429,
    universe: "DC",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-aquaman.jpg",
    tags: ["dc", "funko pop", "aquaman"]
  },
  {
  id: "p69",
    title: "LEGO DC Batman: Бетмобіль із фільму «Бетмен проти Супермена",
    price: 1479,
    universe: "DC",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-batmobile.jpg",
    tags: ["dc", "lego", "batman"]
  },
  {
    id: "p70",
    title: "Фігурка Funko POP! Star Wars: Grogu with armor",
    price: 799,
    universe: "Star Wars",
    category: "Funko Pop",
    badge: "",
    image: "../assets/cataloge-goods/funko-grogu2.jpg",
    tags: ["grogu", "star wars", "sw", "funko pop"]
  },
  {
    id: "p71",
    title: "LEGO Star Wars Крокохід AT-TE",
    price: 5858,
    universe: "Star Wars",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-sw-at-te.jpg",
    tags: ["lego", "star wars", "sw"]
  },
  {
    id: "p72",
    title: "LEGO Star Wars Зореліт Джанго Фетта",
    price: 2799,
    universe: "Star Wars",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-sw-jango.jpg",
    tags: ["lego", "star wars", "sw"]
  },
  {
    id: "p73",
    title: "LEGO Star Wars Зоряний винищувач V-19 «Потік»",
    price: 2599,
    universe: "Star Wars",
    category: "LEGO",
    badge: "",
    image: "../assets/cataloge-goods/lego-sw-v-19.jpg",
    tags: ["lego", "star wars", "sw"]
  },
  {
    id: "p74",
    title: "LEGO Star Wars Мікровинищувач Y-Wing Капітана Рекса",
    price: 566,
    universe: "Star Wars",
    category: "LEGO",
    badge: "Топ продажів",
    image: "../assets/top-sales-home/lego-y-wing-rex's2.jpg",
    tags: ["lego", "star wars", "sw"]
  },
  {
    id: "p75",
    title: "Брелок Funko Pop! Marvel Captain America",
    price: 350,
    universe: "Marvel",
    category: "Funko Pop",
    badge: "Топ продажів",
    image: "../assets/top-sales-home/america-cap-keychain2.jpg",
    tags: ["keychain", "funlo pop", "capitan america"]
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

// ======= Modal refs =======
const productModal = document.getElementById("productModal");
const pmodalImage = document.getElementById("pmodalImage");
const pmodalPills = document.getElementById("pmodalPills");
const pmodalTitle = document.getElementById("pmodalTitle");
const pmodalPrice = document.getElementById("pmodalPrice");
const pmodalStock = document.getElementById("pmodalStock");
const pmodalDesc = document.getElementById("pmodalDesc");
const pmodalSpecs = document.getElementById("pmodalSpecs");
const pmodalStars = document.getElementById("pmodalStars");
const pmodalRatingText = document.getElementById("pmodalRatingText");
const pmodalBenefits = document.getElementById("pmodalBenefits");
const pmodalAdd = document.getElementById("pmodalAdd");

let currentProductId = null;

// ======= State =======
const state = {
  universe: "Всі всесвіти",
  category: "Всі категорії",
  query: ""
};

// ======= Helpers =======
const fmtUAH = (n) => new Intl.NumberFormat("uk-UA").format(n) + " ₴";

function normalize(str) {
  return (str || "").toString().trim().toLowerCase();
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


const CART_KEY = "GEEK_STORE_CART";

function readCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function writeCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product){
  const cart = readCart();

  if (cart[product.id]) {
    cart[product.id].qty += 1;
  } else {
    cart[product.id] = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      universe: product.universe,
      category: product.category,
      qty: 1
    };
  }

  writeCart(cart);
}


function showToast(message){
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  toast.innerHTML = `
    <div class="toast__content">
      <span class="toast__icon">
        <svg viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      <span>${message}</span>
    </div>
    <a href="cart.html" class="toast__link">Кошик</a>
  `;

  container.appendChild(toast);

  // анімація появи
  setTimeout(() => toast.classList.add("is-show"), 10);

  // авто-закриття
  setTimeout(() => {
    toast.classList.remove("is-show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}


// ======= Modal helpers =======
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function openProductModal(productId) {
  const p = getProductById(productId);
  if (!p || !productModal) return;

  currentProductId = p.id;

  // image
  if (pmodalImage) {
    pmodalImage.src = p.image;
    pmodalImage.alt = p.title;
  }

  // pills
  const universeLabel = (p.universe === "Gaming") ? "Ігри" : p.universe;
  if (pmodalPills) {
    pmodalPills.innerHTML = `
      <span class="pmodal__pill">${p.category}</span>
      <span class="pmodal__pill is-accent">${universeLabel}</span>
    `;
  }

  // title + price
  if (pmodalTitle) pmodalTitle.textContent = p.title;
  if (pmodalPrice) pmodalPrice.textContent = fmtUAH(p.price);

  // stock
  const inStock = (p.inStock ?? true);
  if (pmodalStock) {
    pmodalStock.textContent = inStock ? "✓ В наявності" : "✕ Немає в наявності";
    pmodalStock.style.background = inStock ? "#eefbf1" : "#fff1f2";
    pmodalStock.style.color = inStock ? "#166534" : "#9f1239";
  }

  // rating
  const rating = p.rating ?? 4.9;
  const reviews = p.reviews ?? 127;

  if (pmodalStars) {
    pmodalStars.innerHTML = "★★★★★".split("").map((s, i) =>
      `<span style="font-size:1.1rem; color:${i < Math.round(rating) ? "#facc15" : "#cbd5e1"}">${s}</span>`
    ).join("");
  }
  if (pmodalRatingText) pmodalRatingText.textContent = `${rating.toFixed(1)} (${reviews} відгуків)`;

  // description + specs
  if (pmodalDesc) pmodalDesc.textContent = p.desc ?? "Опис скоро з’явиться. Ми готуємо деталі для цього товару.";

  const specs = p.specs ?? ["Офіційний товар", "Якісні матеріали", "Підійде для подарунку"];
  if (pmodalSpecs) pmodalSpecs.innerHTML = specs.map(s => `<li>${s}</li>`).join("");

  // benefits
  const benefits = p.benefits ?? [
    { dot: "#22c55e", title: "Безкоштовна доставка", text: "При замовленні від 1000 ₴" },
    { dot: "#3b82f6", title: "Повернення протягом 14 днів", text: "Без питань" },
    { dot: "#a855f7", title: "Офіційна гарантія", text: "Від виробника" }
  ];

  if (pmodalBenefits) {
    pmodalBenefits.innerHTML = benefits.map(b => `
      <div class="pmodal__benefit">
        <span class="pmodal__dot" style="background:${b.dot}"></span>
        <div>
          <div style="font-weight:700; margin-bottom:.15rem;">${b.title}</div>
          <div style="color:#475569; font-weight:450;">${b.text}</div>
        </div>
      </div>
    `).join("");
  }

  // open
  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.documentElement.style.overflow = "hidden";
}

function closeProductModal() {
  if (!productModal) return;
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.documentElement.style.overflow = "";
  currentProductId = null;
}

// ======= Modal listeners =======
// close overlay / close button
document.addEventListener("click", (e) => {
  if (e.target.closest('[data-close="modal"]')) closeProductModal();
});

// esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal?.classList.contains("is-open")) closeProductModal();
});

// modal buttons
pmodalAdd?.addEventListener("click", () => {
  if (!currentProductId) return;

  const p = getProductById(currentProductId);
  if (!p) return;

  addToCart(p);
  showToast("Товар додано в кошик");
});



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

// ✅ відкриття модалки по кнопці "Купити" (делегування, без once)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-buy]");
  if (!btn) return;
  openProductModal(btn.dataset.buy);
});

// init
buildUniversePills();
buildCategoryFilters();
render();