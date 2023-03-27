import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

let openPopup = document.querySelector('.popup-open');
const popupEdit = document.querySelector('.popup_edit');
let closePopup = document.querySelector('.popup__button-close');

let profileContainer = document.querySelector('.profile__info');
let editName = profileContainer.querySelector('.profile__name');
let editProf = profileContainer.querySelector('.profile__profession');

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_job');

let openPopupNC = document.querySelector('.profile__button-add');
let popupNewCard = document.querySelector('.popupNewCard');
let closepopupNewCard = document.querySelector('.popupNewCard__button-close');

let newCardformElement = document.querySelector('.popupNewCard__container');
let newCardNameInput = newCardformElement.querySelector('.popupNewCard__input_name');
let newCardLinkInput = newCardformElement.querySelector('.popupNewCard__input_link');

const cardTemplate = document.querySelector('.card_template').content;
const cardName = cardTemplate.querySelector('.place__title');
const cardImg = cardTemplate.querySelector('.place__image');
const cardsList = document.querySelector('.elements');

const openPopupZoom = cardTemplate.querySelector('.popupZoom-open');
export const popupZoom = document.querySelector('.popupZoom');
const closepopupZoom = popupZoom.querySelector('.popupZoom__button-close');
const popupZoomImgName = popupZoom.querySelector('.popupZoom__title');
const popupZoomImgLink = popupZoom.querySelector('.popupZoom__img');

// Включаем/выкл попап редактирования
openPopup.addEventListener('click', function () {
  toggleClass(popupEdit);
})
closePopup.addEventListener('click', () => toggleClass(popupEdit));


// Закрытие попапов нажатием на Esc
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    const popupOpened = document.querySelector('.popup_opened');
    toggleClass(popupOpened)
  }
})

// функция открытия/закрытия какого либо из попапов
function toggleClass(popupToToggle) {
  popupToToggle.classList.toggle('popup_opened');
}

// Закрытие попапов нажатием на overlay
function closePopupOverlay() {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((popupItem) => {
    popupItem.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        toggleClass(popupItem);
      }
    })
  })
}

closePopupOverlay();

// подготовка формы попапа к открытию
function prepareForm(form, ) {
  validateInput();
  toggleButtonState();
}

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';

// Находим форму в DOM
// Находим поля формы в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  const popupEdit = document.querySelector('.popup_edit');
  editName.textContent = nameInput.value;
  editProf.textContent = jobInput.value;
  toggleClass(popupEdit);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

openPopupNC.addEventListener('click', () => toggleClass(popupNewCard));
closepopupNewCard.addEventListener('click', () => toggleClass(popupNewCard));

// проходим по массиву с данными, создаем и вставляем карточки в дом дерево
initialCards.forEach((item) => {
  const card = new Card(item, '.card_template');
  const cardItem = card.generateCard();

  cardsList.prepend(cardItem);
});

function handleSubmit(evt) {
  evt.preventDefault();

  const newcard = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value
  };

  const card = new Card(newcard, '.card_template');
  const cardItem = card.generateCard();

  cardsList.prepend(cardItem);

  newCardNameInput.value = '';
  newCardLinkInput.value = '';

  toggleClass(popupNewCard);

}

newCardformElement.addEventListener('submit', handleSubmit);

export const vConfig = {
  formSelector: '.form', //общий класс для всех форм настоящих и будущих, которые мы хотим валидировать
  inputSelector: '.form__input', //общий класс для всех инпутов в формах которые мы хотим валидировать
  submitButtonSelector: '.form__button', //общий класс для всех кнопок сабмита в формах которые мы хотим валидировать
  inactiveButtonClass: 'button_invalid', //класс стилизации неактивной "ЗАсереной" кнопки
  inputErrorClass: 'popup__input_type_error', //класс стилизация красной линии
  errorClass: 'form__input-error_active' //класс стилизация красного текста ошибки
};

const validateFormNC = new FormValidator(vConfig, '.popupNewCard__container');
const validateFNC = validateFormNC.enableValidation();

const validateFormEdit = new FormValidator(vConfig, '.popup__container');
const validateFEdit = validateFormEdit.enableValidation();

// function handleSubmit(evt) {
//   evt.preventDefault();

//   const newcard = {
//     name: newCardNameInput.value,
//     link: newCardLinkInput.value
//   };
//   renderCard(newcard);

//   newCardNameInput.value = '';
//   newCardLinkInput.value = '';

//   toggleClassNewCard();
// }

// function renderCards() {
//   initialCards.forEach(renderCard);
// }

// function renderCard(card) {
//   const htmlElement = cardTemplate.cloneNode(true);
//   htmlElement.querySelector('.place__title').textContent = card.name;
//   htmlElement.querySelector('.place__image').src = card.link;
//   const deleteButton = htmlElement.querySelector('.place__delete');
//   const likeButton = htmlElement.querySelector('.place__like');
//   const openPopupZoom = htmlElement.querySelector('.popupZoom-open');

//   openPopupZoom.addEventListener('click', openPopupImgZoom);
//   deleteButton.addEventListener('click', handleDelete);
//   likeButton.addEventListener('click', handleLike);

//   cardsList.prepend(htmlElement);
// }

// function openPopupImgZoom(evt) {
//   toggleClass(popupZoom);
//   popupZoomImgName.textContent = evt.currentTarget.parentElement.textContent;
//   popupZoomImgLink.src = evt.currentTarget.src;
// }

// closepopupZoom.addEventListener('click', () => toggleClass(popupZoom));

// function handleDelete(evt) {
//   evt.target.closest('.place').remove();
// }

// function handleLike(evt) {
//   evt.target.classList.toggle('place__like_active');
// }

// renderCards();