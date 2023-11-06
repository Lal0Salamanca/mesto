import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector('.popupZoom__img');
        this._captionElement = this._popup.querySelector('.popupZoom__title');
    }

    open(link, name) {
        this._imageElement.src = link;
        this._imageElement.alt = name;
        this._captionElement.textContent = name;
        super.open();
    }

}

// const popupWithImage = new PopupWithImage('.popup_with-image');
// popupWithImage.setEventListeners();

// const openButton = document.querySelector('.open-button');
// openButton.addEventListener('click', () => {
//   const imageUrl = 'https://example.com/image.jpg';
//   const caption = 'Example image';
//   popupWithImage.open(imageUrl, caption);
// });
