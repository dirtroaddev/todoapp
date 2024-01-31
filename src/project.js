export default class Project {
    items = [];
    constructor(title) {
        this.title = title;
    }

    setItems(title, description, dueDate, isPriority) {
        this.items.push(new Item(title, description, dueDate, isPriority));
    }

    get items() {
        return this.items;
    }
}