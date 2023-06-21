const cuurentLng = localStorage.getItem("currentLang");
const isCuurentLng = cuurentLng ? cuurentLng : "ua";

i18next.init({
  lng: isCuurentLng,
  debug: true,
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
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = i18next.t(key);
  });
  btnLngs.forEach((btn) => (btn.textContent = isCuurentLng));
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
