const mainNav = document.querySelector(".main-nav");
const navList = mainNav.querySelector(".main-nav__list");
const navToggleButton = mainNav.querySelector(".main-nav__toggle");


navList.classList.remove("main-nav__list--nojs");

navToggleButton.addEventListener("click", function() {
  navList.classList.toggle("main-nav__list--active");
  navToggleButton.classList.toggle("main-nav__toggle--active");
});
