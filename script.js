const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const close = document.querySelector(".header__close");

const modal = document.querySelector(".modal");
const order = document.querySelector(".header__btn");
const modalClose = document.querySelector(".modal__cancel");

const questions = document.querySelectorAll(".faq-question");

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab__content");

const form = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");
const formButton = document.querySelector(".form-button");
const formMessage = document.querySelector(".form-message");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;
    const currentContent = document.querySelector(`#${tabId}`);
    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });
    tabContents.forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    currentContent.classList.add("active");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name === "") {
    formMessage.innerHTML = "Введите имя";
  } else if (email === "") {
    formMessage.innerHTML = "Введите email";
  } else if (message === "") {
    formMessage.innerHTML = "Введите текст сообщения";
  } else {
    formMessage.innerHTML = "Форма успешно отправлена";
  }
});

function openMenu() {
  menu.classList.add("header__nav-active");
}

function closeMenu() {
  menu.classList.remove("header__nav-active");
}

function openModal() {
  modal.classList.add("modal__active");
}

function closeModal() {
  modal.classList.remove("modal__active");
}

burger.onclick = openMenu;
close.onclick = closeMenu;

order.onclick = openModal;
modalClose.onclick = closeModal;
