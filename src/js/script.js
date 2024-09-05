import Swiper from 'swiper';
import 'swiper/css';

const burgerBtn = document.querySelector(".burger-btn");
const heroMenu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".overlay");
const productCardBtns = document.querySelectorAll(".product-card__btn");
const trendingBtns = document.querySelectorAll(".trending__btn");
const trendingColorsBtns = document.querySelectorAll(".trending__colors-btn");
let swiper = null;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    effect: 'slide',
    slidesPerView: 'auto',
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
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
    },
  });
}

function handleSwiper() {
  const heroWrapper = document.querySelector('.hero__wrapper');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  if (window.innerWidth < 768) {
    if (!swiper) {
      initSwiper();
      heroWrapper.style.display = '';
      swiperWrapper.style.display = '';
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    heroWrapper.style.display = 'contents';
    swiperWrapper.style.display = 'contents';
  }
}

handleSwiper();
window.addEventListener('resize', handleSwiper);

burgerBtn.addEventListener("click", () => {
  heroMenu.classList.add("hero__menu--active");
  overlay.classList.add("overlay--active");
});

overlay.addEventListener("click", () => {
  heroMenu.classList.remove("hero__menu--active");
  overlay.classList.remove("overlay--active");
});

productCardBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("product-card__btn--active");
  });
});

trendingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    trendingBtns.forEach(button => button.classList.remove("trending__btn--active"));
    btn.classList.add("trending__btn--active");
  });
});


trendingColorsBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("trending__colors-btn--active");
  });
});
