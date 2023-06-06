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
