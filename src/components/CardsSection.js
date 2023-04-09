export class CardsSection {
    constructor({items, renderer}, selector) {
        this._container = document.querySelector(selector);
        this._initialItems = items;
        this._renderer = renderer;
    }

    render() {
        this._initialItems.reverse().forEach(data => {
            this.addItem(this._renderer(data));
        })
    }

    addItem(htmlElement) {
        this._container.prepend(htmlElement);
    }
}