"use strict";

/*collapse navbar */
const toggleButton = document.querySelector(".toggle-button");
const navBlock = document.querySelector(".nav-block");

toggleButton.addEventListener("click", () => {
  if (navBlock.classList.contains("active")) {
    setTimeout(function () {
      navBlock.classList.remove("active");
    }, 0);
    navBlock.classList.remove("visible");
  } else {
    setTimeout(function () {
      navBlock.classList.add("visible");
    }, 230);
    setTimeout(function () {
      navBlock.classList.add("active");
    }, 0);
  }
});

/*scroll parts */

const courses = [...document.querySelectorAll(".section")];
const btnThemes = [...document.querySelectorAll(".nav-item")];

console.log(btnThemes);
console.log(courses);

btnThemes.forEach((theme) =>
  theme.addEventListener("click", function (e) {
    console.log(e);
    courses[e.target.dataset.scroll].scrollIntoView({ behavior: "smooth" });
  })
);

/*slider*/

const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-btn-left');
    const btnRight = document.querySelector('.slider-btn-right');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
  };
  slider();
  

