function toggleClass(popup) {
    popup.classList.toggle('popup_opened');
  }

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        toggleClass(this._popup);
    }

    close() {
        toggleClass(this._popup);
    }

    _handleEscClose(event) {
        if (event.keyCode === 27) {
              const popupOpened = document.querySelector('.popup_opened');
              this.close();
            }
    }

    _handleOverlayClose() {
        const popupList = Array.from(document.querySelectorAll('.popup_opened'));
          
            popupList.forEach((popupItem) => {
              popupItem.addEventListener('click', (event) => {
                if (event.target === event.currentTarget) {
                    this.close();
                }
            })
        })
      }

    setEventListeners() {
        document.addEventListener('keydown', () => this._handleEscClose());
        document.addEventListener('click', () => this._handleOverlayClose());
        const closePopup = this._popup.querySelector('.button-close');
        closePopup.addEventListener('click', () => this.close());
    }
}