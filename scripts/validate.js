import { vConfig } from './index.js';

// подчеркивание поля красным когда ошибка вкл
function showInputError (input, errorMessage, validationConfig, errorElement) {
    input.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  // подчеркивание поля красным когда ошибка выкл
  function hideInputError (input, validationConfig, errorElement) {  
    input.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(validationConfig.errorClass);
  };

//данная функция в зависимости от того валид или не валид инпут вкл/выкл ошибку
function validateInput(formElement, input, validationConfig) {
    const errorElement = formElement.querySelector(`.${input.id}-error`);

    if (input.validity.valid) {
        hideInputError(input, validationConfig, errorElement);
    } else {
        showInputError(input, input.validationMessage, validationConfig, errorElement);
    }
}

//данная функция проверяет массив инпутов той формы которая валидируется на данный момент на валидность
// и если хоть один из массива не отвечает условиям требования, будет возвращено false
function hasInvalidInputs(inputs) {
    return inputs.every(input => input.validity.valid);
}

function toggleButtonState(button, validationConfig, inputs) {
    if (hasInvalidInputs(inputs)) {
        button.classList.remove(validationConfig.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(validationConfig.inactiveButtonClass);
        button.disabled = true;
    }
}

function setInputListeners(formElement, validationConfig) {
 const inputs = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
 const button = formElement.querySelector(validationConfig.submitButtonSelector);

 inputs.forEach(input => {
    input.addEventListener('input', e => {
        validateInput(formElement, input, validationConfig);
        toggleButtonState(button, validationConfig, inputs);
    })
 })

}

function enableValidation(validationConfig) {
  const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));

  forms.forEach(form => {
    form.addEventListener('submit', preventFormSubmit);

    setInputListeners(form, validationConfig);
  });
}

function preventFormSubmit(e) {
    e.preventDefault();
}

enableValidation(vConfig);