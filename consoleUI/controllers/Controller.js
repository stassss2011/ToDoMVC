/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindUseOption(this.handleOption);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo)
    }

    run() {
        this.view.printMenu();
        this.view.readMenuItem()
    }

    onTodoListChanged = todos => {
        this.view.displayTodo(todos)
    };

    handleOption = option => {
        let optionInt = parseInt(option);
        switch (optionInt) {
            case 1: {
                this.view.createTodo();
                break;
            }
            case 2: {
                this.view.toggleTodo();
                break;
            }
            case 3: {
                this.view.updateTodo();
                break;
            }
            case 4: {
                this.view.deleteTodo();
                break;
            }
            case 5:
                this.view.closeView();
                break;
            default:
                break;
        }
    };

    handleAddTodo = response => {
        this.model.addTodo(response);
        this.run()
    };

    handleEditTodo = response => {
        let resList = response.split(", ");
        this.model.editTodo(parseInt(resList[0]), resList[1]);
        this.run()
    };

    handleDeleteTodo = response => {
        this.model.deleteTodo(parseInt(response));
        this.run()
    };

    handleToggleTodo = response => {
        this.model.toggleTodo(parseInt(response));
        this.run()
    }
}

export default Controller