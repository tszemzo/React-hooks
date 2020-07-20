import React from 'react'
import {Subscribe} from "unstated";
import TodoContainer from '../../containers/TodoContainer';

class Todos extends React.Component {
    render() {
        return (
            <ul>
                <Subscribe to={[TodoContainer]}>
                    {(todoContainer) => (
                        todoContainer.state.todos.map((todo) => (<li>{todo.description}</li>))
                    )}
                </Subscribe>
            </ul>
        );
    }
}

export default Todos