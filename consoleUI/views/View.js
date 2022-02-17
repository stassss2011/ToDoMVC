import readline from "readline";

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    printMenu() {
        this.rl.write("\nMenu\n" +
            "1) Add Todo\n" +
            "2) Toggle Todo\n" +
            "3) Edit Todo\n" +
            "4) Remove Todo\n" +
            "5) Exit\n")
    }

    readMenuItem() {
        this.rl.question("Choose action: ", response => this._optionHandler(response))
    }

    createTodo() {
        this.rl.question("Enter Todo text: ", response => this._addTodoHandler(response))
    }

    updateTodo() {
        this.rl.question("Enter item update 'id, new_text': ", response => this._editTodoHandler(response))
    }

    deleteTodo() {
        this.rl.question("Enter item delete: ", response => this._deleteTodoHandler(response))
    }

    toggleTodo() {
        this.rl.question("Enter item toggle: ", response => this._toggleTodoHandler(response))
    }

    displayTodo(todos) {
        console.clear();
        this.rl.write("\nTodo items:\n");
        for (let todo of todos) {
            let completedString = todo.complete ? '■' : ' ';
            this.rl.write(`${todo.id}> [${completedString}] ${todo.text}\n`);
        }
        this.rl.write("\n")

    }


    closeView() {
        this.rl.close()
    }

    bindUseOption(handler) {
        this._optionHandler = handler
    }

    bindAddTodo(handler) {
        this._addTodoHandler = handler
    }

    bindDeleteTodo(handler) {
        this._deleteTodoHandler = handler
    }

    bindEditTodo(handler) {
        this._editTodoHandler = handler
    }

    bindToggleTodo(handler) {
        this._toggleTodoHandler = handler
    }

}

export default View