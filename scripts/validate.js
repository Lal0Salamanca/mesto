// let formElement = document.querySelector('.popup__container'); переменная уже обьявлена в main.js
const elementInput = document.querySelector('.form__input');
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

// функция проверки поля на валидность

// вариант функции когда нужно валидировать несколько полей
const isValid = (form, elementInput) => {
  if (!elementInput.validity.valid) {
    showInputError(form, elementInput, elementInput.validationMessage);
  } else {
    hideInputError(form, elementInput);
  }
};

// добавляем слушатель одном полю
// elementInput.addEventListener('input', isValid);


// одному полю мало, надо слушательли всем полям формы
const setEventListeners = (form) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(form.querySelectorAll('.form__input'));
  // Найдём в текущей форме кнопку отправки
  const button = form.querySelector('.form__button');
  // const buttonEdit = formElement.querySelector('.form_buttons_edit');
  // const buttonCreateNC = newCardformElement.querySelector('.form_buttons_new-card');
  // Обойдём все элементы полученной коллекции
  toggleButtonState(inputList, button);

  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(form, inputElement);

      toggleButtonState(inputList, button);
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
    buttonElement.classList.remove('form_buttons');
    buttonElement.classList.add('button_invalid');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('button_invalid');
    buttonElement.classList.add('form_buttons');
    buttonElement.removeAttribute('disabled');
  }
}; 

// одной формы мало, надо всем формам в документе
const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию
  formList.forEach((form) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(form);
  });
};

// Вызовем функцию
enableValidation();