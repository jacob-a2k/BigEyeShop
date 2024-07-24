"use strict";

////////////////
// STICKY NAVIGATION
const header = document.querySelector(".header-container");
const navBox = document.querySelector(".header");

const navHeight = navBox.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) navBox.classList.add("sticky");
  else navBox.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////
// SLIDER - PROMOTION SECTION
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-rigth");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${23 * (-1 * slide)}rem)`)
  );
};

// Next slide
const nextSlide = function () {
  if (curSlide === 4) return;
  curSlide++;
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    return;
  } else {
    curSlide--;
    goToSlide(curSlide);
  }
};

const init = function () {
  goToSlide(0);
};
init();

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
