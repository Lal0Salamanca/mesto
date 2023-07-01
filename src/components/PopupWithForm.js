import { Popup } from './Popup.js';

class PopupWithForm extends Popup {

    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('.form__input'));
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formValues = this._getInputValues();
            this._submitCallback(formValues);
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

}

// const formPopup = new PopupWithForm('.popup_form', (formValues) => {
//     // Обработка отправки формы
//     console.log(formValues);
//     formPopup.close();
//   });
//   formPopup.setEventListeners();
  
//   const openFormButton = document.querySelector('.open-form-button');
//   openFormButton.addEventListener('click', () => {
//     formPopup.open();
//   });
  