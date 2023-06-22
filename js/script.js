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
    new Accordion(".accordion-container");
    visibleParagraphs.forEach((paragraphData) => {
      makeMarkup(paragraphData);
    });
    new Accordion(".accordion-container");
  };

  const handleShowMore = () => {
    for (let i = 0; i < hiddenParagraphs.length; i++) {
      new Accordion(".accordion-container");
      makeMarkup(hiddenParagraphs[i]);
      new Accordion(".accordion-container");
    }
    button.style.display = "none";
  };

  button.addEventListener("click", handleShowMore);
  showFirstParagraphs();
});

const inputs = document.querySelectorAll(".form-feedback__input[type=tel]");
const dropDownContainer = document.querySelectorAll(
  ".form-feedback__wraper_phone"
);

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

document.querySelectorAll(".select").forEach((select) => {
  const selectOption = select.querySelectorAll("option");
  const selectOptionLength = selectOption.length;
  const selectedOption = Array.from(selectOption).find(
    (option) => option.selected
  );
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
      selectItems.forEach((item) => {
        item.addEventListener("click", function () {
          const chooseItem = this.dataset.value;
          select.value = chooseItem;
          selectedOption.removeAttribute("selected");
          selectOption.forEach((option) => {
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

// // Получение ссылок на контейнеры с помощью querySelectorAll
// const containers = document.querySelectorAll(".ticker");

// // Массив из двух слов
// const words = ["Компанія доставки", "Авто-лайф_PL"];

// // Создание временного span для вычисления ширины
// const tempSpan = document.createElement("span");
// tempSpan.style.visibility = "hidden";
// tempSpan.style.whiteSpace = "nowrap";

// // Установка содержимого временного span
// const wordIndex = 0; // Берем первое слово из массива
// tempSpan.textContent = `${words[wordIndex]}`;

// // Вычисление ширины span с вложенным контентом
// document.body.appendChild(tempSpan); // Добавляем временный span в DOM
// const spanWidth = tempSpan.offsetWidth; // Получаем вычисленную ширину span
// document.body.removeChild(tempSpan); // Удаляем временный span из DOM

// // Определение максимальной ширины контейнеров
// let maxWidth = 0;
// containers.forEach((container) => {
//   maxWidth = Math.max(maxWidth, container.offsetWidth);
// });

// // Создание контейнера для бегущей строки
// const marqueeContainer = document.createElement("div");
// marqueeContainer.className = "marquee-container";

// // Вычисление необходимого количества span
// const totalSpanCount = Math.ceil(maxWidth / spanWidth);

// // Создание спанов с вложенными элементами <svg>
// for (let i = 0; i < totalSpanCount; i++) {
//   const span = document.createElement("span");
//   const wordIndex = i % words.length;
//   span.innerHTML = `${words[wordIndex]} <svg width="18" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12.7078 11.2809L17.6982 7.32406L11.383 6.50569L9.16122 0.538539L6.4296 6.29004L0.0864488 6.56786L4.69502 10.9352L2.98832 17.0694L8.5774 14.019L13.8834 17.5402L12.7078 11.2809Z" fill="#F2D53C"/>
//   </svg>`;
//   marqueeContainer.appendChild(span);
// }

// // Добавление бегущей строки в каждый контейнер
// containers.forEach((container) => {
//   container.appendChild(marqueeContainer.cloneNode(true));
// });
function start() {
  var marqueeElements = document.getElementsByClassName("marquee");
  for (var i = 0; i < marqueeElements.length; i++) {
    var direction = i % 2 === 0 ? "left" : "right";
    new mq(marqueeElements[i], direction);
    mqRotate(mqr);
  }
}

window.onload = start;

function objWidth(obj) {
  if (obj.offsetWidth) return obj.offsetWidth;
  if (obj.clip) return obj.clip.width;
  return 0;
}

var mqr = [];

function mq(element, direction) {
  this.mqo = element;
  var spanElement = this.mqo.getElementsByTagName("span")[0];
  var wid = objWidth(spanElement) + 5;
  var fulwid = objWidth(this.mqo);
  var txt = spanElement.innerHTML;
  this.mqo.innerHTML = "";
  var heit = this.mqo.style.height;
  this.mqo.onmouseout = function () {
    mqRotate(mqr);
  };
  this.mqo.onmouseover = function () {
    clearTimeout(mqr[0].TO);
  };
  this.mqo.ary = [];
  var maxw = Math.ceil(fulwid / wid) + 1;
  var totalElements = direction === "left" ? maxw * 2 : maxw;
  for (var i = 0; i < totalElements; i++) {
    var index = i % maxw;
    this.mqo.ary[i] = document.createElement("div");
    this.mqo.ary[i].innerHTML = txt;
    this.mqo.ary[i].style.position = "absolute";
    this.mqo.ary[i].style.left = wid * index + "px";
    this.mqo.ary[i].style.width = wid + "px";
    this.mqo.ary[i].style.height = heit;
    this.mqo.appendChild(this.mqo.ary[i]);
  }
  mqr.push(this.mqo);

  // Устанавливаем направление анимации в зависимости от четности индекса
  if (direction === "left") {
    this.mqo.direction = -1;
  } else {
    this.mqo.direction = 1;
  }
}

function mqRotate(mqr) {
  if (!mqr) return;
  for (var j = mqr.length - 1; j > -1; j--) {
    var maxa = mqr[j].ary.length;
    for (var i = 0; i < maxa; i++) {
      var x = mqr[j].ary[i].style;
      x.left = parseInt(x.left, 10) + mqr[j].direction + "px";
    }
    var firstElement = mqr[j].ary[0];
    var lastElement = mqr[j].ary[maxa - 1];
    if (
      mqr[j].direction === -1 &&
      parseInt(firstElement.style.left, 10) +
        parseInt(firstElement.style.width, 10) <
        0
    ) {
      var z = mqr[j].ary.shift();
      z.style.left =
        parseInt(lastElement.style.left) +
        parseInt(lastElement.style.width) +
        "px";
      mqr[j].ary.push(z);
    } else if (
      mqr[j].direction === 1 &&
      parseInt(lastElement.style.left, 10) > parseInt(window.innerWidth)
    ) {
      var z = mqr[j].ary.pop();
      z.style.left =
        parseInt(firstElement.style.left) -
        parseInt(firstElement.style.width) +
        "px";
      mqr[j].ary.unshift(z);
    }
  }
  mqr[0].TO = setTimeout("mqRotate(mqr)", 45);
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
