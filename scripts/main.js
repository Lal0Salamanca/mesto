let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');

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

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);