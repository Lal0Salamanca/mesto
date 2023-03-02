const cardsList = document.querySelector('.elements');

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
        const newCardTemplate = cardTemplate.cloneNode(true);

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
        this._element.querySelector('.popupZoom__button-close').addEventListener('click', () => this._handleClosePopup());
    }

    _handleLike() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _handleDelete() {
        this._element.querySelector('.card_template').closest('.place').remove();
    }

    _handleOpenPopup() {
        this._element.querySelector('.popup-open').classList.add('popup_opened');
        this._element.querySelector('.popupZoom__title').textContent = this._text.currentTarget.parentElement.textContent;
        this._element.querySelector('.popupZoom__img').src = this._image.currentTarget.src;
    }

    _handleClosePopup() {
        this._element.querySelector('.popup-open').classList.remove('popup_opened');
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, '.card_template');
    const cardItem = card.generateCard();

    cardsList.prepend(cardItem);
});