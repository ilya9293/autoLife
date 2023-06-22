const curentLng = localStorage.getItem("currentLang");
const isCurentLng = curentLng ? curentLng : "ua";

i18next.init({
  lng: isCurentLng,
  debug: false,
  resources: {
    ua: {
      translation: uaTranslation,
    },
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
});

function updateTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");
  const inputs = document.querySelectorAll("[data-i18nph]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = i18next.t(key);
  });
  inputs.forEach((input) => {
    const key = input.dataset.i18nph;
    const translatedValue = i18next.t(key);
    input.setAttribute("placeholder", translatedValue);
  });
  btnLngs.forEach((btn) => (btn.textContent = isCurentLng));
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang, function (err, t) {
    if (err) {
      console.error("Ошибка при изменении языка:", err);
      return;
    }
    updateTranslations();
  });
}

const langSwitchers = document.querySelectorAll("[data-lang]");
const btnLngs = document.querySelectorAll(".languages__btn");
langSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", () => {
    const valueLng = switcher.dataset.lang;
    localStorage.setItem("currentLang", valueLng);
  });
});

changeLanguage();
