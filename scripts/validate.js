// let formElement = document.querySelector('.popup__container'); переменная уже обьявлена в main.js
const elementInput = document.querySelector('.form_inputs');
// const buttons = document.querySelector('.form_buttons');
const formError = document.querySelector(`.${elementInput.id}-error`)

// живая валидация
// elementInput.addEventListener('input', function(event) {
//   console.log(event.target.validity.valid);
// });

// подчеркивание поля красным когда ошибка вкл
const showInputError = (form, element, errorMessage) => {
  const errorElement = form.querySelector(`.${element.id}-error`);

  element.classList.add('popup__input_type_error');
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
};

// подчеркивание поля красным когда ошибка выкл
const hideInputError = (form, element) => {
  const errorElement = form.querySelector(`.${element.id}-error`);

  element.classList.remove('popup__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

// функция состояния кнопки отправки формы
// const buttonStatus = (button) => {
//   if (!elementInput.validity.valid)   {
//   button.classList.add('button_invalid');
//   button.classList.remove('popup__button-save');
//   button.setAttribute('disabled', 'disabled');
// } else {
//   button.classList.add('popup__button-save');
//   button.classList.remove('button_invalid');
//   button.removeAttribute('disabled');
// }
// };

// функция проверки поля на валидность

// вариант функции когда нужно валидировать несколько полей
const isValid = (formElement, elementInput) => {
  if (!elementInput.validity.valid) {
    showInputError(formElement, elementInput, elementInput.validationMessage);
  } else {
    hideInputError(formElement, elementInput);
  }
};

// добавляем слушатель одном полю
// elementInput.addEventListener('input', isValid);


// одному полю мало, надо слушательли всем полям формы
const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form_inputs'));
  // Найдём в текущей форме кнопку отправки
  const buttons = document.querySelector('.form_buttons');
  // Обойдём все элементы полученной коллекции
  toggleButtonState(inputList, buttons);

  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)

      toggleButtonState(inputList, buttons);
    });
  });
};

// функция проверки всех полей формы на валидность
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((elementInput) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !elementInput.validity.valid;
  })
}; 

// функция состояния кнопки отправки формы
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('.button_invalid');
    buttonElement.classList.remove('.form_buttons');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('.button_invalid');
    buttonElement.classList.add('.form_buttons');
    buttonElement.removeAttribute('disabled');
  }
}; 

// одной формы мало, надо всем формам в документе
const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation(); 