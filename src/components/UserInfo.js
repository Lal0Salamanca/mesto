export class UserInfo {
    constructor(elementNameSelector, elementProfSelector) {
        this._nameElement = document.querySelector(elementNameSelector);
        this._profElement = document.querySelector(elementProfSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            prof: this._profElement.textContent
        }
    }

    setUserInfo({ name, prof }) {
        this._nameElement.textContent = name;
        this._profElement.textContent = prof;
    }

}

// const userInfo = new UserInfo({
//     nameSelector: '.profile__name',
//     infoSelector: '.profile__profession',
//   });
  
//   const userData = userInfo.getUserInfo();
//   console.log(userData); // Выводит текущие данные пользователя
  
//   const newUserData = {
//     name: 'ЖакИв',
//     prof: 'Исследователь',
//   };
  
//   userInfo.setUserInfo(newUserData); // Обновляет данные пользователя на странице

// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации
// о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов:
// элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект
// с данными пользователя. Этот метод пригодится когда данные
// пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые
// данные пользователя и добавляет их на страницу.