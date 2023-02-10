const elementInput = formElement.querySelector('.popup__input');
const formError = document.querySelector(`.${elementInput.id}-error`)

// живая валидация
// elementInput.addEventListener('input', function(event) {
//   console.log(event.target.validity.valid);
// });

// подчеркивание поля красным когда ошибка вкл
const showInputError = (element, errorMessage) => {
  element.classList.add('popup__input_type_error');
  formError.classList.add('form__input-error_active');
  formError.textContent = errorMessage;
};

// подчеркивание поля красным когда ошибка выкл
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

// функция состояния кнопки отправки формы
const buttonStatus = (button) => {
  if (!elementInput.validity.valid)   {
  button.classList.add('button_invalid');
  button.classList.remove('popup__button-save');
  button.setAttribute('disabled', 'disabled');
} else {
  button.classList.add('popup__button-save');
  button.classList.remove('button_invalid');
  button.removeAttribute('disabled');
}
};

// функция проверки поля на валидность

// вариант функции когда нужно валидировать одно поле
const isValid = () => {
  if (!elementInput.validity.valid) {
    showInputError(elementInput, elementInput.validationMessage);
  } else {
    hideInputError(elementInput);
  }
  buttonStatus(saveButton);
};

elementInput.addEventListener('input', isValid);