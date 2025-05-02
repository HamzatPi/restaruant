export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = '';

  const section = document.createElement("section");
  section.classList.add("home-section");

  const heading = document.createElement("h1");
  heading.textContent = "Добро пожаловать в Тёплую Тарелку!";
  heading.classList.add("home-heading");

  const subheading = document.createElement("p");
  subheading.textContent = "Насладитесь вкусом традиционной и комфортной еды.";
  subheading.classList.add("home-subheading");

  const image = document.createElement("img");
  image.src = "./assets/home.jpg";
  image.alt = "Главное фото ресторана";
  image.classList.add("home-image");

  const reviewSection = document.createElement("div");
  reviewSection.classList.add("review-section");

  const reviewTitle = document.createElement("h2");
  reviewTitle.textContent = "Отзывы наших гостей";

  const reviewList = document.createElement("div");
  reviewList.classList.add("review-list");

  const reviewForm = document.createElement("form");
  reviewForm.classList.add("review-form");

  reviewForm.innerHTML = `
    <input type="text" name="name" placeholder="Ваше имя" required />
    <textarea name="review" placeholder="Ваш отзыв..." required></textarea>
    <button type="submit">Оставить отзыв</button>
  `;

  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = reviewForm.name.value.trim();
    const review = reviewForm.review.value.trim();

    if (name && review) {
      const entry = document.createElement("div");
      entry.classList.add("review-entry");
      entry.innerHTML = `<strong>${name}</strong><p>${review}</p>`;
      reviewList.prepend(entry);
      reviewForm.reset();
    }
  });

  reviewSection.appendChild(reviewTitle);
  reviewSection.appendChild(reviewList);
  reviewSection.appendChild(reviewForm);

  section.appendChild(heading);
  section.appendChild(subheading);
  section.appendChild(image);
  section.appendChild(reviewSection);
  content.appendChild(section);
}
