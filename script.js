profilePopup = document.querySelector('.profile-popup');
buttonClick = document.querySelector('.button-click');
buttonClick1 = document.querySelector('.button-click1');
buttonClick2 = document.querySelector('.button-click2');

function openPopup(element) {
  element.classList.add('popup_open');
};
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

buttonClick.addEventListener('click', () => {
  openPopup(profilePopup);
});
buttonClick1.addEventListener('click', () => {
  openPopup(profilePopup);
});
buttonClick2.addEventListener('click', () => {
  openPopup(profilePopup);
});

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

function closePopup(element) {
  element.classList.remove('popup_open');
};