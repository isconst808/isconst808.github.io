"use strict";

var classActive = "active";
var navBlock = document.querySelector(".nav__block");
var burger = document.querySelector(".burger");
var menu = document.querySelector(".nav__block");
burger.addEventListener("click", function () {
  burger.classList.toggle(classActive);
  menu.classList.toggle(classActive);
});

function setup_for_width(mql) {
  if (mql.matches) {
    burger.classList.remove(classActive);
    menu.classList.remove(classActive); // Определяем отступ сверху для меню

    var headerHeight = document.querySelector(".header").offsetHeight;
    var navItemHeight = document.querySelector(".nav__item").offsetHeight;
    var indentTopMenu = headerHeight - navItemHeight / 2;
  }
}

var mql = window.matchMedia("screen and (max-width: 768px)");
mql.addListener(setup_for_width); // Добавим прослушку на смену результата

setup_for_width(mql); // Вызовем нашу функцию