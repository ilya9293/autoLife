import dataForTg from './config.js'

const mobBackDrop = document.querySelector("[data-modal]");
const mobBtn = document.querySelector("[data-modal-open]");
const mobBtnClose = document.querySelector("[data-modal-close]");

const toggleModal = (e) => {
  mobBackDrop.classList.toggle("is-open");
};

const closeModal = (e) => {
  if (e.currentTarget === e.target) {
    mobBackDrop.classList.remove("is-open");
  }
};

mobBtn.addEventListener("click", toggleModal);
mobBtnClose.addEventListener("click", toggleModal);
mobBackDrop.addEventListener("click", closeModal);

document.addEventListener("DOMContentLoaded", async function () {
  await changeLanguage(isCurentLng);

  const container = document.querySelector(".accordion-container");
  const button = document.querySelector(".questions__btn");

  if (!button) return;

  const paragraphsData = [
    {
      titleKey: "questions.two.title",
      textKey: "questions.two.answer",
    },
    {
      titleKey: "questions.three.title",
      textKey: "questions.three.answer",
    },
    {
      titleKey: "questions.four.title",
      textKey: "questions.four.answer",
    },
    {
      titleKey: "questions.five.title",
      textKey: "questions.five.answer",
    },
    {
      titleKey: "questions.six.title",
      textKey: "questions.six.answer",
    },
    {
      titleKey: "questions.seven.title",
      textKey: "questions.seven.answer",
    },
    {
      titleKey: "questions.eight.title",
      textKey: "questions.eight.answer",
    },
    {
      titleKey: "questions.nine.title",
      textKey: "questions.nine.answer",
    },
    {
      titleKey: "questions.ten.title",
      textKey: "questions.ten.answer",
    },
    {
      titleKey: "questions.eleven.title",
      textKey: "questions.eleven.answer",
    },
    {
      titleKey: "questions.twelve.title",
      textKey: "questions.twelve.answer",
    },
    {
      titleKey: "questions.threeteen.title",
      textKey: "questions.threeteen.answer",
    },
    {
      titleKey: "questions.fourteen.title",
      textKey: "questions.fourteen.answer",
    },
    {
      titleKey: "questions.fifteen.title",
      textKey: "questions.fifteen.answer",
    },
    {
      titleKey: "questions.seexteen.title",
      textKey: "questions.seexteen.answer",
    },
    {
      titleKey: "questions.seventeen.title",
      textKey: "questions.seventeen.answer",
    },
  ];
  const visibleParagraphsCount = 6;
  let hiddenParagraphs = [...paragraphsData];

  const makeMarkup = (data) => {
    const title = i18next.t(data.titleKey);
    const text = i18next.t(data.textKey);
    const markup = `<div class="ac">
                      <h2 class="ac-header">
                      <button type="button" class="ac-trigger">
                         ${title}
                      </button>
                      </h2>
                      <div class="ac-panel">
                         <p class="ac-text">
                            ${text}
                         </p>
                      </div>
                   </div>`;

    container.insertAdjacentHTML("beforeend", markup);
  };

  const showFirstParagraphs = () => {
    const visibleParagraphs = hiddenParagraphs.splice(
      0,
      visibleParagraphsCount
    );
    visibleParagraphs.forEach((paragraphData) => {
      makeMarkup(paragraphData);
    });
    new Accordion(".accordion-container");
  };

  const handleShowMore = () => {
    new Accordion(".accordion-container");
    for (let i = 0; i < hiddenParagraphs.length; i++) {
      makeMarkup(hiddenParagraphs[i]);
    }
    new Accordion(".accordion-container");
    button.style.display = "none";
  };

  button.addEventListener("click", handleShowMore);
  showFirstParagraphs();
//   start();
});

const inputs = document.querySelectorAll(".form-feedback__input[type=tel]");
const dropDownContainer = document.querySelectorAll(
  ".form-feedback__wraper_phone"
);
let iti = [];

if (inputs && dropDownContainer) {
  iti = [...inputs].map((el, idx) => {
    return window.intlTelInput(el, {
      utilsScript: "./js/utils.js",
      preferredCountries: ["ua", "us", "gb"],
      separateDialCode: true,
      dropdownContainer: dropDownContainer[idx],
    });
  });
}


const stepBtn = document.querySelectorAll("[data-switch]");
const listParcel = document.querySelector(".steps-list.parcel");
const listPassenger = document.querySelector(".steps-list.passenger");
stepBtn.forEach((btn) => {
  const handleStepBtn = () => {
    stepBtn.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    const valueDataSwitch = btn.dataset.switch;
    if (valueDataSwitch === "parcel") {
      listParcel.classList.remove("hide");
      listPassenger.classList.add("hide");
    } else if (valueDataSwitch === "passenger") {
      listPassenger.classList.remove("hide");
      listParcel.classList.add("hide");
    }
  };
  btn.addEventListener("click", handleStepBtn);
});

const anchors = document.querySelectorAll(".anchor");
anchors.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetElement = document.querySelector(targetId);
    //  const scrollTime = parseInt(this.getAttribute("data-scroll-time")) || 1000;

    const targetOffset = targetElement.offsetTop;
    const startOffset = window.pageYOffset;
    const distance = targetOffset - startOffset;

    const startTime = performance.now();

    function scrollAnimation(currentTime) {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(elapsedTime / 1000, 1);
      const scrollPosition = startOffset + distance * scrollProgress;

      window.scrollTo(0, scrollPosition);

      if (scrollProgress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  });
});

// Calc Form

const calcForm = document.querySelector(".calc__form");
const costValue = document.querySelector("#cost-value");

const handleCost = (e) => {
  e.preventDefault();
  const { width, length, height } = e.currentTarget;
  const result =
    (Number(width.value) * Number(length.value) * Number(height.value) * 60) /
    (50 * 40 * 25);
  costValue.textContent = Math.round(result);
};

calcForm.addEventListener("submit", handleCost);

const calcInputs = document.querySelectorAll(".calc__input");
const setWidthInput = () => {
  calcInputs.forEach((input) => {
    if (curentLng === "pl" && window.innerWidth > 687) {
      input.style.maxWidth = "54%";
    } else {
      input.style.maxWidth = "";
    }
  });
};

window.addEventListener("resize", setWidthInput);
setWidthInput();

// Политика конфединциальности
const policyLink = document.querySelector(".policy__link");

switch (curentLng) {
  case "ua":
    policyLink.setAttribute("href", "1");
    break;
  case "pl":
    policyLink.setAttribute("href", "2");
    break;
  case "en":
    policyLink.setAttribute("href", "3");
    break;
  default:
    break;
}

// Form Feedback
const formFeedback = document.querySelector(".form-feedback");
const successModal = document.getElementById("successModal");
const errorModal = document.getElementById("errorModal");
const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    successModal.style.display = "none";
    errorModal.style.display = "none";
  });
});

function showSuccessModal() {
  successModal.style.display = "flex";
  successModal.classList.add("fade-in");
}

function showErrorModal() {
  errorModal.style.display = "flex";
  errorModal.classList.add("fade-in");
}

function hideModalAfterDelay(modal) {
   setTimeout(() => {
     modal.style.display = "none";
   }, 3000);
 }

 successModal.addEventListener("click", (e) => {
   if (e.target === successModal) {
     successModal.style.display = "none";
   }
 });
 
 errorModal.addEventListener("click", (e) => {
   if (e.target === errorModal) {
     errorModal.style.display = "none";
   }
 });

const handleFeedback = async (e) => {
  e.preventDefault();
  const formData = new FormData(formFeedback);
  let message = "Данные формы:\n\n";
  const phoneNumber = iti[0].getNumber();
  message += `phone: ${phoneNumber}\n`;

  for (let pair of formData.entries()) {
    const [name, value] = pair;
    if (name !== "phone") {
      message += `${name}: ${value}\n`;
    }
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${dataForTg.botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `chat_id=${dataForTg.chatId}&text=${encodeURIComponent(message)}`,
      }
    );

    if (response.ok) {
      showSuccessModal();
      hideModalAfterDelay(successModal);
    } else {
      showErrorModal();
      hideModalAfterDelay(errorModal);
    }
  } catch (error) {
    showErrorModal();
    hideModalAfterDelay(errorModal);
  }
};

formFeedback.addEventListener("submit", handleFeedback);
