class CardInList {
    constructor(container, item) {
        this.container = container
        this.item = item
        // Надо исправить : Нельзя вызывать или создавать реализацию в конструторе класса
        // Вызывая реализацию в конструторе класса, при наследовании, вы не сможите вызвать другой метод не вызвав реализацию в конструкторе
        // Если Вам необходимо будет вызвать конструктор родителя при наследовании в одном из классов
        // так же, вы заведомо делаете класс не тестируемым, так как всегда при инициализации будет вызываться конструктор классаp
        this.render()
    }

    render() {
        const newCards = new Card(this.item.name, this.item.link)
        this.container.appendChild(newCards.create())
    }
}
