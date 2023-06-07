const mobBackDrop = document.querySelector("[data-modal]");
const mobBtn = document.querySelector("[data-modal-open]");
const mobBtnClose = document.querySelector("[data-modal-close]");

const toggleModal = () => {
  mobBackDrop.classList.toggle("is-open");
};

mobBtn.addEventListener("click", toggleModal);
mobBtnClose.addEventListener("click", toggleModal);

// new Accordion(".accordion-container");

document.addEventListener("DOMContentLoaded", function () {
  //   const questionsBtn = document.querySelector(".questions__btn");
  //   const acContainers = document.querySelectorAll(".ac");

  //   const hiddenAc = [...acContainers].slice(3);
  //   const visiblePcontainersCount = 3;

  //   hiddenAc.forEach((container) => (container.style.display = "none"));

  //   questionsBtn.addEventListener("click", () => {
  //     for (var i = 0; i < visiblePcontainersCount; i++) {
  //       if (hiddenAc.length > 0) {
  //         hiddenAc.shift().style.display = "block";
  //       }
  //     }

  //     if (hiddenAc.length === 0) {
  //       questionsBtn.style.display = "none";
  //     }
  //   });

  const container = document.querySelector(".accordion-container");
  const button = document.querySelector(".questions__btn");

  if (!button) return;

  const paragraphsData = [
    {
      title: "Як можна замовити місце для пасажира/передачі?",
      text: "Для замовлення місця достатньо подзвонити або написати нам на номер +380969646086 або +380687778088 (Viber, WhatsApp, Telegram)",
    },
    {
      title: "За скільки часу можна замовити місце?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Скільки одиниць багажу входить у вартість проїзду пасажира?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "З яких міст України у нас виїзд?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "В яких містах Польщі ми працюємо?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як часто у нас виїзди?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як можна відправити передачу з України?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Що заборонено передавати?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "У що краще пакувати передачу?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як підписувати передачу?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як ми дізнаємось, що це ваша передача?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Чи можлива відправка посилки по Польші поштоматом?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Яка вартість перевезення передачі?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Чи можна замовити ліки або інші товари?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як швидко відбувається відправка передач по Україні?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Коли передачу отримують у Польщі?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Як можна отримати номер накладної на посилку?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const visibleParagraphsCount = 7;
  let hiddenParagraphs = [...paragraphsData];

  const showNextParagraphs = () => {
    new Accordion(".accordion-container");

    const visibleParagraphs = hiddenParagraphs.splice(
      0,
      visibleParagraphsCount
    );

    visibleParagraphs.forEach((paragraphData) => {
      const markup = `<div class="ac">
                        <h2 class="ac-header">
                        <button type="button" class="ac-trigger">
                           ${paragraphData.title}
                        </button>
                        </h2>
                        <div class="ac-panel">
                        <p class="ac-text">
                        ${paragraphData.text}
                        </p>
                        </div>
                     </div>`;

      container.insertAdjacentHTML("beforeend", markup);
    });
    new Accordion(".accordion-container");

    if (hiddenParagraphs.length === 0) {
      button.style.display = "none";
    }
  };

  button.addEventListener("click", showNextParagraphs);

  showNextParagraphs();
});

const inputs = document.querySelectorAll(
  ".form-feedback__input[type=tel]"
);
const dropDownContainer = document.querySelectorAll(
  ".form-feedback__wraper_phone"
);

if (inputs && dropDownContainer) {
  iti = [...inputs].map((el, idx) => {
    return window.intlTelInput(el, {
      utilsScript:
        "/js/utils.js",
      preferredCountries: ["ua", "us", "gb"],
      separateDialCode: true,
      dropdownContainer: dropDownContainer[idx],
    });
  });
}

document.querySelectorAll(".select").forEach(select => {
   const selectOption = select.querySelectorAll("option");
   const selectOptionLength = selectOption.length;
   const selectedOption = Array.from(selectOption).find(option => option.selected);
   const duration = 450;
 
   const wrapper = document.createElement("div");
   wrapper.className = "select";
   select.parentNode.insertBefore(wrapper, select);
 
   select.style.display = "none";
   wrapper.appendChild(select);
 
   const newSelect = document.createElement("div");
   newSelect.className = "new-select";
   newSelect.textContent = select.querySelector("option:disabled").textContent;
   wrapper.appendChild(newSelect);
 
   const selectHead = newSelect;
 
   const selectList = document.createElement("div");
   selectList.className = "new-select__list";
   wrapper.appendChild(selectList);
 
   for (let i = 1; i < selectOptionLength; i++) {
     const selectItem = document.createElement("div");
     selectItem.className = "new-select__item";
     const span = document.createElement("span");
     span.textContent = selectOption[i].textContent;
     selectItem.appendChild(span);
     selectItem.dataset.value = selectOption[i].value;
     selectList.appendChild(selectItem);
   }
 
   const selectItems = selectList.querySelectorAll(".new-select__item");
   selectList.style.display = "none";
   selectHead.addEventListener("click", () => {
     if (!selectHead.classList.contains("on")) {
       selectHead.classList.add("on");
       selectList.style.display = "block";
       selectItems.forEach(item => {
         item.addEventListener("click", function () {
           const chooseItem = this.dataset.value;
           select.value = chooseItem;
           selectedOption.removeAttribute("selected");
           selectOption.forEach(option => {
             if (option.value === chooseItem) {
               option.setAttribute("selected", "selected");
             }
           });
           selectHead.textContent = this.querySelector("span").textContent;
           selectList.style.display = "none";
           selectHead.classList.remove("on");
         });
       });
     } else {
       selectHead.classList.remove("on");
       selectList.style.display = "none";
     }
   });
 });
 
 
 