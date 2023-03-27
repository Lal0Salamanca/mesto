import { vConfig } from './index.js';

export class FormValidator {
    constructor(vConfig, form) {
        this._form = form;
        this._button = this._form.querySelector(vConfig.submitButtonSelector);
        this._inputs = Array.from(form.querySelectorAll(vConfig.inputSelector));
        this._config = vConfig;
    }

    _showInputError(input) {
        const errorElement = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._config.errorClass);
    }

    _hideInputError(input) {
        const errorElement = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._config.errorClass);
    }

    _validateInput(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    }

    _hasInvalidInputs() {
        return this._inputs.every(input => input.validity.valid);
    }

    _toggleButtonState() {
        if (this._hasInvalidInputs()) {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = true;
        }
    }

    _setInputListeners() {
        this._inputs.forEach(input => {
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
        this._form.addEventListener('submit', () => this._preventFormSubmit);

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