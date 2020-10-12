"use strict";

$(document).ready(function () {
  var FORM_SELECT = $(".app-form__select"),
      BTN_ORDER = $(".banner-bottom__btn"),
      BTN_CALLBACK = $(".tel > button"),
      MODAL_WIN = $(".modal"),
      BTN_CLOSE_MODAL_WIN = $(".modal__btn-close"),
      CLASS_ACTIVE = "active",
      MODAL_WIN_CONTENT = $(".modal__content"),
      MODAL_WIN_ORDER = $(".modal__order"),
      MODAL_WIN_CALLBACK = $(".modal__callback");
  FORM_SELECT.click(function (e) {
    if ($(this)[0].options.selectedIndex > 0) {
      $(this).addClass(CLASS_ACTIVE);
    }
  });
  BTN_CALLBACK.click(function (e) {
    removeActiveClass();
    MODAL_WIN.toggleClass(CLASS_ACTIVE);
    MODAL_WIN_CALLBACK.toggleClass(CLASS_ACTIVE);
  });
  BTN_CLOSE_MODAL_WIN.click(function (e) {
    MODAL_WIN.removeClass(CLASS_ACTIVE);
    removeActiveClass();
  });
  BTN_ORDER.click(function (e) {
    removeActiveClass();
    MODAL_WIN.toggleClass(CLASS_ACTIVE);
    MODAL_WIN_ORDER.toggleClass(CLASS_ACTIVE);
  });

  function removeActiveClass() {
    MODAL_WIN_CONTENT.removeClass(CLASS_ACTIVE);
  }
});