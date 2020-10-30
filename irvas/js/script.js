"use strict";

var TABS_1_LINKS = document.querySelectorAll(".balcony-tab__btn"),
    TABS_1_BLOCK = document.querySelectorAll('.balcony-tabcontent__col');
var TABS_2_LINKS = document.querySelectorAll(".decor-tab__label"),
    TABS_2_BLOCK = document.querySelectorAll('.decor-tabcontent__body');
TABS_1_LINKS.forEach(function (item) {
  item.addEventListener("click", function (e) {
    tabs(e, TABS_1_LINKS, TABS_1_BLOCK, item);
  });
});
TABS_2_LINKS.forEach(function (item) {
  item.addEventListener("click", function (e) {
    tabs(e, TABS_2_LINKS, TABS_2_BLOCK, item);
  });
});
document.querySelector(".balcony-tab__btn").click();
document.querySelector(".decor-tab__label").click();

function tabs(e, links, block, item) {
  var activeClassName = 'active';
  e.preventDefault();
  var id = e.target.getAttribute("href").replace("#", "");
  links.forEach(function (child) {
    child.classList.remove(activeClassName);
  });
  block.forEach(function (child) {
    child.classList.remove(activeClassName);
  });
  item.classList.add(activeClassName);
  document.getElementById(id).classList.add(activeClassName);
}