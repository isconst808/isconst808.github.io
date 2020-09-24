"use strict";

$(document).ready(function () {
  var FORM_SELECT = $(".app-form__select");
  $(FORM_SELECT).click(function (e) {
    if ($(this)[0].options.selectedIndex > 0) {
      $(this).addClass("active");
    }
  });
});