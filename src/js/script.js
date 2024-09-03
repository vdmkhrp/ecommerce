import Swiper from 'swiper';
import 'swiper/css';

const burgerBtn = document.querySelector(".burger-btn");
const heroMenu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".overlay");

const swiper = new Swiper('.swiper', {
  effect: 'slide',
  slidesPerView: 1,
  slidesPerGroup: 1,
  grabCursor: true,
  autoHeight: true,
  speed: 600,
  spaceBetween: 8,
  loop: true,
  loopedSlides: 4,
  slideToClickedSlide: true,
  mousewheel: {
    releaseOnEdges: true,
  },
});

burgerBtn.addEventListener("click", () => {
  heroMenu.classList.add("hero__menu--active");
  overlay.classList.add("overlay--active");
});

overlay.addEventListener("click", () => {
  heroMenu.classList.remove("hero__menu--active");
  overlay.classList.remove("overlay--active");
});
