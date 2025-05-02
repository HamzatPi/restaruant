export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = '';

  const title = document.createElement("h1");
  title.textContent = "Связаться с нами";

  const contacts = [
    {
      icon: "📞",
      label: "Телефон",
      value: "8 929 892 04 03"
    },
    {
      icon: "🏠",
      label: "Адрес",
      value: "г. Грозный, пр. Хусейна Исаева, 100"
    },
    {
      icon: "📧",
      label: "Email",
      value: "hamzat0403@mail.ru"
    }
  ];

  const container = document.createElement("div");
  container.classList.add("contact-grid");

  contacts.forEach(c => {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    const icon = document.createElement("div");
    icon.classList.add("contact-icon");
    icon.textContent = c.icon;

    const label = document.createElement("div");
    label.classList.add("contact-label");
    label.textContent = c.label;

    const value = document.createElement("div");
    value.classList.add("contact-value");
    value.textContent = c.value;

    card.appendChild(icon);
    card.appendChild(label);
    card.appendChild(value);
    container.appendChild(card);
  });

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Обратная связь";

  const form = document.createElement("form");
  form.classList.add("contact-form");

  form.innerHTML = `
    <input type="text" placeholder="Ваше имя" required />
    <input type="email" placeholder="Ваш email" required />
    <textarea placeholder="Ваше сообщение" required></textarea>
    <button type="submit">Отправить</button>
  `;

  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Спасибо за сообщение!");
    form.reset();
  });

  const map = document.createElement("iframe");
  map.classList.add("contact-map");
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.353382021598!2d45.69975401542604!3d43.31244737913562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404e81c9f06bffff%3A0x6b9a74de06b97e71!2z0YPQuy4g0JPQvtGA0L7QstCwINCc0LjQu9C-0LLQsCwgMTAwLCDQkdC10LvQtdC90LjRhtC60L7Qs9C-LCDQkNC70LDQstC-0LzRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzY0MDAw!5e0!3m2!1sru!2sru!4v1714661145680!5m2!1sru!2sru";
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.referrerPolicy = "no-referrer-when-downgrade";

  content.appendChild(title);
  content.appendChild(container);
  content.appendChild(formTitle);
  content.appendChild(form);
  content.appendChild(map);
}
