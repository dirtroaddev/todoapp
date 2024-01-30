class Project {
    todos = []
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    addTodos(title, description, dueDate, isPriority) {
        this.todos.push(new Todo(title, description, dueDate, isPriority));
    }

    get todos() {
        return this.todos;
    }
}


export default Project;