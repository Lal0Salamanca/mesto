import { popupZoom } from '../index.js';
import { popupZoomImgLink } from '../index.js';

export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._image = data.link;
        this._text = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        const newCardTemplate = cardTemplate.querySelector('.place').cloneNode(true);

        return newCardTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.place__image').src = this._image;
        this._element.querySelector('.place__title').textContent = this._text;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => this._handleLike());
        this._element.querySelector('.place__delete').addEventListener('click', () => this._handleDelete());
        this._element.querySelector('.place__image').addEventListener('click', () => this._handleOpenPopupZoom());
        popupZoom.querySelector('.popupZoom__button-close').addEventListener('click', () => this._handleClosePopupZoom());
    }

    _handleLike() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _handleDelete() {
        this._element.closest('.place').remove();
    }

    _handleOpenPopupZoom = () => {
        this._handleCardClick(this._image, this._text);
    }

    _handleClosePopupZoom() {
        popupZoom.classList.remove('popup_opened');
        popupZoomImgLink.src = '';
    }
}

// // Логика открытия попапа с картинкой
// const handleCardClick = (image, text) => {
//     const popupImage = document.querySelector('.popupZoom__img');
//     const popupTitle = document.querySelector('.popupZoom__title');
  
//     popupImage.src = image;
//     popupTitle.textContent = text;
  
//     // Открытие попапа с картинкой
//     const popupZoom = document.querySelector('.popupZoom');
//     popupZoom.classList.add('popup_opened');
//   };
  
//   const cardData = {
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
//     name: 'Архыз'
//   };
  
//   const card = new Card(cardData, '.card-template', handleCardClick.bind(card));
//   const cardElement = card.generateCard();