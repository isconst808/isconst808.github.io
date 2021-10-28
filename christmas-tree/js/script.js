"use strict";

// Скрывать Placeholder при фокусе
var allInput = document.querySelectorAll("input");
var allTextarea = document.querySelectorAll("textarea");
allInput.forEach(function (element) {
  hiddenPlaceholder(element);
});
allTextarea.forEach(function (element) {
  hiddenPlaceholder(element);
});

function hiddenPlaceholder(el) {
  var placeholder = "";
  el.addEventListener("focus", function (e) {
    placeholder = e.target.placeholder;
    e.target.placeholder = "";
  });
  el.addEventListener("blur", function (e) {
    e.target.placeholder = placeholder;
  });
} // Скрывать Placeholder при фокусе


;
$(document).ready(function () {
  var MENU_BURGER = $(".nav__menu-burger"),
      MENU_BTN_CLOSE = $(".nav__btn-close"),
      NAV_MENU = $(".nav__menu-body"),
      ACTIVE_CLASS = "active";
  MENU_BURGER.click(function (e) {
    NAV_MENU.addClass(ACTIVE_CLASS);
  });
  MENU_BTN_CLOSE.click(function (e) {
    NAV_MENU.removeClass(ACTIVE_CLASS);
  });
  var NAV_INNER = $(".nav__inner"),
      NAV_SECTION = $(".nav"),
      HEADER_SECTION = $(".header");

  function changeNavHeight() {
    NAV_SECTION.height(NAV_INNER.outerHeight());
  }

  changeNavHeight();
  var headerHeight;
  getHeaderHeight();
  window.addEventListener("scroll", function () {
    if (pageYOffset >= headerHeight) {
      NAV_INNER.addClass("fixed");
    } else {
      NAV_INNER.removeClass("fixed");
    }
  });

  function getHeaderHeight() {
    return headerHeight = HEADER_SECTION.outerHeight();
  }

  $(window).resize(function () {
    getHeaderHeight();
    changeNavHeight();
  });
  var NAV_LINKS = document.querySelectorAll(".nav__link");
  NAV_LINKS.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      var el = document.getElementById(item.getAttribute("data-link"));

      if (window.matchMedia("(max-width: 768px)").matches) {
        el.scrollIntoView({
          behavior: "auto",
          block: "start"
        });
      } else {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      NAV_MENU.removeClass(ACTIVE_CLASS);
    });
  });
  var LINK_ADDRESS = $("a[data-link=address]");
  LINK_ADDRESS.click(function (e) {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      e.preventDefault();
    }
  });
});