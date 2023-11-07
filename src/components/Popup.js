function toggleClass(popup) {
    popup.classList.toggle('popup_opened');
}

export class Popup {
    constructor(popupSelector) {
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this._popup = document.querySelector(popupSelector);
    }

    removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
    }

    open() {
        toggleClass(this._popup);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        toggleClass(this._popup);
        this.removeEventListeners()
    }

    _handleEscClose(event) {
        if (event.keyCode === 27) {
            const popupOpened = document.querySelector('.popup_opened');
            this.close();
        }
    }

    _handleOverlayClose() {
        const popupList = Array.from(document.querySelectorAll('.popup'));

        popupList.forEach((popupItem) => {
            popupItem.addEventListener('click', (event) => {
                if (event.target === event.currentTarget) {
                    this.close();
                }
            })
        })
    }

    setEventListeners() {
        document.addEventListener('click', this._handleOverlayClose);
        const closePopupBtn = this._popup.querySelector('.button-close');
        closePopupBtn.addEventListener('click', () => this.close());
    }
}