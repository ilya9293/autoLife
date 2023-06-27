const curentLng = localStorage.getItem("currentLang");
const isCurentLng = curentLng ? curentLng : "ua";

async function loadTranslation(lang) {
  const response = await fetch(`translations/${lang}.json`);
  if (!response.ok) {
    throw new Error(`Failed to load translation for ${lang}`);
  }
  return await response.json();
}

async function initI18next(lang) {
  const translation = await loadTranslation(lang);

  i18next.init(
    {
      lng: lang,
      debug: true,
      resources: {
        [lang]: {
          translation: translation,
        },
      },
    },
    () => {
      const preloader = document.querySelector(".preloader");
      preloader.style.display = "none";
    }
  );
}

async function updateTranslations() {
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

async function changeLanguage(lang) {
  try {
    await initI18next(lang);
    updateTranslations();
  } catch (err) {
    console.error("Ошибка при изменении языка:", err);
  }
}

const langSwitchers = document.querySelectorAll("[data-lang]");
const btnLngs = document.querySelectorAll(".languages__btn");
langSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", () => {
    const valueLng = switcher.dataset.lang;
    localStorage.setItem("currentLang", valueLng);
  });
});
