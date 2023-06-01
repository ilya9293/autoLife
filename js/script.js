const mobBackDrop = document.querySelector("[data-modal]");
const mobBtn = document.querySelector("[data-modal-open]");
const mobBtnClose = document.querySelector("[data-modal-close]");

const toggleModal = () => {
  mobBackDrop.classList.toggle("is-open");
};

mobBtn.addEventListener("click", toggleModal);
mobBtnClose.addEventListener("click", toggleModal);
