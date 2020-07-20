import { Container } from "unstated";

class TodoContainer extends Container {
    state = {
        todos: []
    }

    // Concepto de variable de instancia, sin constructor.
    id = 0;

    // No es el setState de React!!! Es el de unstated
    addTodo = (todo) => {
        const newTodo = {id: this.id++, description: todo}
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    };

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                } else {
                    return {...todo};
                }
            })
        });
    };
}

export default TodoContainer