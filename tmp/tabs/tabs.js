function TabsCustom(obj = {}) {
   const _this = this;
   _this.tabsContainer = obj.tabsContainer ? obj.tabsContainer : ".tabs";
   _this.btnItem = obj.btnItem ? obj.btnItem : ".tabs__triggers-link";
   _this.contentItem = obj.contentItem ? obj.contentItem : ".tabs__content-item";
   _this.classActive = obj.classActive ? obj.classActive : "active";

   const tabsContainer = document.querySelector(_this.tabsContainer);

   tabsContainer.querySelectorAll(_this.btnItem).forEach((item) => {
      item.addEventListener("click", (e) => {
         e.preventDefault();
         const id = e.target.getAttribute("href").replace("#", "");
         tabsContainer.querySelectorAll(_this.btnItem).forEach((child) => {
            child.classList.remove(_this.classActive);
         });
         tabsContainer.querySelectorAll(_this.contentItem).forEach((child) => {
            child.classList.remove(_this.classActive);
         });

         item.classList.add(_this.classActive);
         tabsContainer.querySelector(`#${id}`).classList.add(_this.classActive);
      });
   });
   tabsContainer.querySelector(_this.btnItem).click();
}

let tabs = new TabsCustom();
