import Glide from "@glidejs/glide";

const destroyGlideMediaQuery = window.matchMedia("(width >= 768px)");
const glide = new Glide(".glide", {
  type: "carousel",
  perView: 1,
  peek: {
    before: 0,
    after: 100,
  },
  gap: 16,
  breakpoints: {
    767: {
      perView: 2,
    },
    424: {
      perView: 1,
    },
    374: {
      gap: 8,
      perView: 1,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  glide.mount();
  destroyGlideMediaQuery.addEventListener("change", function (event) {
    event.matches ? glide.destroy() : glide.mount();
  });
});

const burgerBtn = document.querySelector(".burger-btn");
const heroMenu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".overlay");
const productCardsBtns = document.querySelectorAll(".product-cards__btn");
const trendingBtns = document.querySelectorAll(".trending__btn");
const trendingColorsBtns = document.querySelectorAll(".trending__colors-btn");

burgerBtn.addEventListener("click", () => {
  heroMenu.classList.add("hero__menu--active");
  overlay.classList.add("overlay--active");
});

overlay.addEventListener("click", () => {
  heroMenu.classList.remove("hero__menu--active");
  overlay.classList.remove("overlay--active");
});

productCardsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("product-cards__btn--active");
  });
});

trendingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    trendingBtns.forEach((button) =>
      button.classList.remove("trending__btn--active")
    );
    btn.classList.add("trending__btn--active");
  });
});

trendingColorsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("trending__colors-btn--active");
  });
});
