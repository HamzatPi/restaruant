export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = '';

  const title = document.createElement("h1");
  title.textContent = "Меню";

  const dishes = [
    {
      name: "Спагетти Болоньезе",
      emoji: "🍝",
      description: "Классическая паста с мясным соусом и итальянскими травами.",
      price: "450 ₽",
      image: "./assets/spaghetti.jpg"
    },
    {
      name: "Салат Цезарь",
      emoji: "🥗",
      description: "Салат с курицей, листьями романо, сухариками и сыром пармезан.",
      price: "400 ₽",
      image: "./assets/salad.jpg"
    },
    {
      name: "Пицца Маргарита",
      emoji: "🍕",
      description: "Пицца с томатным соусом, сыром моцарелла и базиликом.",
      price: "600 ₽",
      image: "./assets/pizza.webp"
    },
    {
      name: "Чизкейк",
      emoji: "🍰",
      description: "Нежный шоколадный чизкейк с хрустящей основой.",
      price: "300 ₽",
      image: "./assets/cheesecake.jpg"
    },
  ];

  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  dishes.forEach(dish => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = dish.image;
    img.alt = dish.name;
    img.classList.add("menu-image");

    const name = document.createElement("h3");
    name.textContent = `${dish.emoji} ${dish.name}`;

    const desc = document.createElement("p");
    desc.textContent = dish.description;

    const price = document.createElement("p");
    price.classList.add("menu-price");
    price.textContent = dish.price;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);

    grid.appendChild(card);
  });

  content.appendChild(title);
  content.appendChild(grid);
}
