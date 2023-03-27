import { vConfig } from './index.js';

export class FormValidator {
    constructor(vConfig, form) {
        this.form = form;
        this.button = this.form.querySelector(vConfig.submitButtonSelector);
        this.inputs = Array.from(form.querySelectorAll(vConfig.inputSelector));
        this.config = vConfig;
        this.errorElement = this.form.querySelector(`.${input.id}-error`);
    }

    _showInputError(input) {
        input.classList.add(vConfig.inputErrorClass);
        this.errorElement.textContent = errorMessage;
        this.errorElement.classList.add(vConfig.errorClass);
    }

    _hideInputError(input) {
        input.classList.remove(vConfig.inputErrorClass);
        this.errorElement.textContent = '';
        this.errorElement.classList.remove(vConfig.errorClass);
    }

    _validateInput(input) {
        if (input.validity.valid) {
            _hideInputError(input);
        } else {
            _showInputError(input);
        }
    }

    _hasInvalidInputs() {
        return this.inputs.every(input => input.validity.valid);
    }

    _toggleButtonState() {
        if (this._hasInvalidInputs(inputs)) {
            button.classList.remove(vConfig.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(vConfig.inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setInputListeners() {
        this.inputs.forEach(input => {
            input.addEventListener('input', e => {
                this._validateInput(input);
                this._toggleButtonState();
            })
        })
    }

    _preventFormSubmit(e) {
        e.preventDefault();
    }

    enableValidation() {
        this.form.addEventListener('submit', this._preventFormSubmit);

        this._setInputListeners();
    }
}

// export const vConfig = {
//     formSelector: '.form', //общий класс для всех форм настоящих и будущих, которые мы хотим валидировать
//     inputSelector: '.form__input', //общий класс для всех инпутов в формах которые мы хотим валидировать
//     submitButtonSelector: '.form__button', //общий класс для всех кнопок сабмита в формах которые мы хотим валидировать
//     inactiveButtonClass: 'button_invalid', //класс стилизации неактивной "ЗАсереной" кнопки
//     inputErrorClass: 'popup__input_type_error', //класс стилизация красной линии
//     errorClass: 'form__input-error_active' //класс стилизация красного текста ошибки
//   };

// Второй класс, который нужно реализовать -- `FormValidator`:

// - Конструктор принимает два аргумента: конфиг с селекторами и DOM-объект формы, которую нужно отвалидировать.
// Здесь можно сразу записать в приватные свойства класса необходимые переменные из конфига,
// чтобы потом в методах сразу к ним обращаться

// - У класса есть один публичный метод включения валидации. Это будет происходить на той форме,
// которая передаётся вторым параметром в конструкторе.

// Именно с этой формой и будет работать экземпляр класса (и ни с какой другой!)
// - Весь остальной функционал, который у вас уже есть по валидации,
// должен стать приватными методами `FormValidator`

// - Конструктор при создании экземпляра класса должен принимать два аргумента - конфигурацию,
// которые вы ранее передавали в функцию `enableValidation`.
// А также ссылку на форму, которую необходимо валидировать.
// Внутри по сути единственным публичным методом будет тот метод,
// который вы будете запускать, чтобы наложить валидацию на форму