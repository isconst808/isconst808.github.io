const menuBurger = document.querySelector(".nav__burger"),
   navMenu = document.querySelector(".nav__body"),
   navLink = document.querySelectorAll(".nav__link"),
   tagBody = document.querySelector("body"),
   activeClass = "active";

menuBurger.addEventListener("click", (e) => {
   menuBurger.classList.toggle(activeClass);
   navMenu.classList.toggle(activeClass);
   tagBody.classList.toggle("lock");
});

navLink.forEach((element) => {
   element.addEventListener("click", () => {
      closeNavMenu();
   });
});

var mql = window.matchMedia("(max-width: 768px)");

mql.addEventListener("change", (e) => {
   if (!e.matches) {
      closeNavMenu();
   }
});

function closeNavMenu() {
   menuBurger.classList.remove(activeClass);
   navMenu.classList.remove(activeClass);
   tagBody.classList.remove("lock");
}
