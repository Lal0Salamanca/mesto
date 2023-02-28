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
    constructor(image, text) {
        this._image = image;
        this._text = text;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector('.card_template').content;
        cardTemplate.querySelector('.place').cloneNode(true);

        return cardTemplate;
    }
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.place__image').src = this._image;
        this._element.querySelector('.place__title').textContent = this._text;

        return this._element;
    }
}

initialCards.forEach((item) => {
    const card = new Card(item.link, item.name);
    const cardItem = card.generateCard();
    
    cardsList.prepend(cardItem);
  });