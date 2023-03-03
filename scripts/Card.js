const cardsList = document.querySelector('.elements');

const popupZoom = document.querySelector('.popupZoom');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

class Card {
    constructor(data, templateSelector) {
        this._image = data.link;
        this._text = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        const newCardTemplate = cardTemplate.querySelector('.place').cloneNode(true);

        return newCardTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.place__image').src = this._image;
        this._element.querySelector('.place__title').textContent = this._text;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => this._handleLike());
        this._element.querySelector('.place__delete').addEventListener('click', () => this._handleDelete());
        this._element.querySelector('.place__image').addEventListener('click', () => this._handleOpenPopup());
        popupZoom.querySelector('.popupZoom__button-close').addEventListener('click', () => this._handleClosePopup());
    }

    _handleLike() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _handleDelete() {
        this._element.closest('.place').remove();
    }

    _handleOpenPopup() {
        popupZoom.classList.add('popup_opened');
        popupZoom.querySelector('.popupZoom__title').textContent = this._text;
        popupZoom.querySelector('.popupZoom__img').src = this._image;
    }

    _handleClosePopup() {
        popupZoom.classList.remove('popup_opened');
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, '.card_template');
    const cardItem = card.generateCard();

    cardsList.prepend(cardItem);
});