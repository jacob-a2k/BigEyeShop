"use strict";

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
  if (curSlide === 4) {
    return;
  } else {
    curSlide++;
    goToSlide(curSlide);
  }
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
