let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');

// openPopup.addEventListener('click', function() {
//     popup.classList.add('popup_opened');
// })

// closePopup.addEventListener('click', function() {
//     popup.classList.remove('popup_opened');
// })

openPopup.addEventListener('click', toggleClass)

closePopup.addEventListener('click', toggleClass)

function toggleClass() {
    popup.classList.toggle('popup_opened');
}