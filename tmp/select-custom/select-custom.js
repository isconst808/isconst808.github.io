function SelectCustom(obj = {}) {
   const _this = this;
   _this.selectWrap = obj.selectWrap ? obj.selectWrap : ".select-wrap";
   _this.selectCustomClass = obj.selectCustomClass ? obj.selectCustomClass : "select-custom";
   _this.selectTriggerClass = obj.selectCustomClass ? obj.selectCustomClass : "select-trigger";
   _this.optionsClass = obj.optionsClass ? obj.optionsClass : "options-custom";
   _this.optionClass = obj.optionClass ? obj.optionClass : "option-custom";
   _this.showClass = obj.showClass ? obj.showClass : "show";
   _this.selectedClass = obj.selectedClass ? obj.selectedClass : "selected";

   let selectWrap = document.querySelector(_this.selectWrap);

   selectWrap.insertAdjacentHTML(
      "beforeend",
      `<div class=${_this.selectCustomClass}><div class=${_this.selectTriggerClass}></div><div class=${_this.optionsClass}></div></div>`
   );

   let selectTag = selectWrap.querySelector("select");
   let selectCustom = selectWrap.querySelector(`.${_this.selectCustomClass}`);
   let selectTrigger = selectWrap.querySelector(`.${_this.selectTriggerClass}`);
   let optionsCustom = selectWrap.querySelector(`.${_this.optionsClass}`);

   for (let index = 0; index < selectTag.length; index++) {
      let elem = selectTag[index];
      if (elem.disabled && elem.selected) {
         elem.disabled = false;
         selectTrigger.innerHTML = elem.text;
      } else if (elem.disabled && !elem.selected) {
         elem.disabled = false;
         continue;
      } else if (!elem.disabled && elem.selected) {
         selectTag[0].selected = true;
         let value = elem.value === undefined ? "" : elem.value;
         selectTag[0].value = value;
         selectTag[0].innerHTML = elem.innerHTML;
         optionsCustom.insertAdjacentHTML(
            "beforeend",
            `<div class=${_this.optionClass} data-value=${elem.value}>${elem.text}</div>`
         );
         selectedItem(elem);
      } else {
         optionsCustom.insertAdjacentHTML(
            "beforeend",
            `<div class=${_this.optionClass} data-value=${elem.value}>${elem.text}</div>`
         );
      }
      if (index === selectTag.length - 1) {
         removeOption(selectTag);
         selectTag.style.cssText = `position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);`;
      }
   }

   function removeOption(arr) {
      if (arr.length > 1) {
         arr[1].remove();
         removeOption(arr);
      }
   }

   let optionItem = selectWrap.querySelectorAll(`.${_this.optionClass}`);

   selectTrigger.addEventListener("click", () => {
      selectCustom.classList.toggle(_this.showClass);
   });

   optionItem.forEach((element) => {
      element.addEventListener("click", (e) => {
         changeValueSelected(element);
         selectedItem(element);
         selectCustom.classList.remove(_this.showClass);
      });
   });

   function selectedItem(elem) {
      selectTrigger.classList.add(_this.selectedClass);
      selectTrigger.innerHTML = elem.innerHTML;
   }

   function changeValueSelected(elem) {
      selectTag[0].selected = true;
      let value = elem.dataset.value === undefined ? "" : elem.dataset.value;
      selectTag[0].value = value;
      selectTag[0].innerHTML = elem.innerHTML;
   }
}

let select = new SelectCustom();
