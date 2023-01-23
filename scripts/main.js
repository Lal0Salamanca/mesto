let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');

let profileContainer = document.querySelector('.profile__info');
let editName = profileContainer.querySelector('.profile__name');
let editProf = profileContainer.querySelector('.profile__profession');

let formElement = document.querySelector('.popup__container');
let saveButton = formElement.querySelector('.popup__button-save');
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_job');

// openPopup.addEventListener('click', function() {
//     popup.classList.add('popup_opened');
// })

// closePopup.addEventListener('click', function() {
//     popup.classList.remove('popup_opened');
// })

openPopup.addEventListener('click', toggleClass)

closePopup.addEventListener('click', toggleClass)

function toggleClass() {
    popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function(event) {
    // console.log('target: ', event.target)
    // console.log('currentTarget: ', event.currentTarget)
    if (event.target === event.currentTarget) {
        toggleClass()
    }
})

// let nameInput = formElement.querySelector('.popup__input_name');
// let jobInput = formElement.querySelector('.popup__input_job');

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';


// Находим форму в DOM

// Находим поля формы в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    editName.textContent = nameInput.value;
    editProf.textContent = jobInput.value;

     toggleClass();
    
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

let cardTemplate = document.querySelector('.card_template').content;
let cardName = cardTemplate.querySelector('.place__title');
let cardImg = cardTemplate.querySelector('.place__image');
let cardsList = document.querySelector(".elements");

function renderCards() {
	initialCards.forEach(renderCard);
}

function renderCard(card) {
	const htmlElement = cardTemplate.cloneNode(true);
	htmlElement.querySelector('.place__title').textContent = card.name;
  htmlElement.querySelector('.place__image').src = card.link;

	cardsList.appendChild(htmlElement);
}

renderCards();

// 1) добавить 6 карточек из коробки
// 2) Добавьте в проект форму добавления новой карточки. Макет найдёте в «Фигме».
// Сделайте так, чтобы форма открывалась нажатием на кнопку «+» и закрывалась кликом на крестик
// 3) Дайте пользователю возможность добавлять карточки:
// что бы Можно было написать имя карточки и дать ссылку на картинку.
// Сделайте так, чтобы при клике на «сохранить» новая карточка попадала в начало контейнера с ними.
//  А диалоговое окно после добавления автоматически закрывалось.
// Чтобы создавать новые карточки, добавьте обработчик событий submit. 
// Сделайте это аналогично прошлому спринту, в котором вы настраивали редактирование информации о пользователе.
// 4) Сделайте так, чтобы карточки можно было лайкать:
// Если лайкнуть карточку, сердечко поменяет цвет.
// 5) Добавьте карточкам иконку удаления. 
// настройте, чтобы карточка удалялась при клике на эту иконку:
// 6) Настройте просмотр фотографий. Пусть открываются нажатием на картинку и закрываются кликом на крестик:
// 7) Сделайте так, чтобы все попапы плавно открывались. Пусть проявляются из прозрачности и уходят в неё при закрытии