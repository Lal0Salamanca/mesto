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