let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');
let profileContainer = document.querySelector('.profile__info');

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

let nameInput = document.querySelector('.popup__input_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job');// Воспользуйтесь инструментом .querySelector()

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';


function editForm() {
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
    profileContainer.textContent = `<div class="profile__info">
                <div class="profile__name-container">
                    <p class="profile__name">${nameInput.value}</p>
                    <button type="button" class="profile__button-edit popup-open" aria-label="Редактировать данные профиля">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.32827L2.60377 8.7666L1.28302 7.41936L8.66038 0L10 1.32827ZM0 10L1.96226 9.41177L0.584906 8.08349L0 10Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <p class="profile__profession">${jobInput.value}</p>
            </div>`;
    // Вставьте новые значения с помощью textContent
}}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


// 1) Открытие и закрытие попапа
// Попап должен открываться по нажатию кнопки «Редактировать», а закрываться — при клике по крестику в правом верхнем углу

// 2)При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.

// 3)После внесения изменений и нажатия кнопки «Сохранить» информация на странице должна обновиться, а попап автоматически закрыться