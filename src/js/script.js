const burgerBtn = document.querySelector(".burger-btn");
const heroMenu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
  heroMenu.classList.add("hero__menu--active");
  overlay.classList.add("overlay--active");
});

overlay.addEventListener("click", () => {
  heroMenu.classList.remove("hero__menu--active");
  overlay.classList.remove("overlay--active");
});
