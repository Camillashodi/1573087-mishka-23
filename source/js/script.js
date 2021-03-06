const mainNav = document.querySelector(".main-nav");
const navLists = mainNav.querySelectorAll(".main-nav__list");
const navToggleButton = mainNav.querySelector(".main-nav__toggle");
const modal = document.querySelector(".modal-order");
const modalButtom = document.querySelector(".weekly-product__order");
const catalog = document.querySelector(".catalog");


let closeModalWindow = function () {
  document.addEventListener("click", function(e) {
    const target = e.target;
    if (target == modal) {
      modal.classList.remove("modal-order--active");
    }
  });
}

let addEventOnButton = function (button, modal) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    let isModalActive = modal.classList.contains("modal-order--active");
    if (!isModalActive) {
      modal.classList.add("modal-order--active");
      closeModalWindow();
    }
  });
};


for (let i = 0; i < navLists.length; i++) {
  navLists[i].classList.remove("main-nav__list--nojs");
}

navToggleButton.classList.remove("main-nav__toggle--nojs");


navToggleButton.addEventListener("click", function() {
  for (let i = 0; i < navLists.length; i++) {
    navLists[i].classList.toggle("main-nav__list--active");
  }
  navToggleButton.classList.toggle("main-nav__toggle--active");
});




if (modalButtom !== null) {
  addEventOnButton(modalButtom, modal);
}

if (catalog !== null) {
  const orderButtonList = catalog.querySelectorAll(".catalog__order-button");

  for (let i = 0; i < orderButtonList.length; i++) {
    addEventOnButton(orderButtonList[i], modal);
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove("modal-order--active");
  }
});
