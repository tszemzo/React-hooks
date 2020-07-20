import React from 'react'
import {Subscribe} from "unstated";
import TodoContainer from '../../containers/TodoContainer';

class AddTodo extends React.Component {
    state = {
        inputValue: ''
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick(addTodo) {
        addTodo(this.state.inputValue);
    }

    render() {
        // Esta arrow function es para poder leer los metodos o interactuar con la suscripcion
        // Recibe como parametro el container que vamos a usar. Y ademas si queres suscribirlo
        // A mas de un container, lo agregas a la lista de to={[sarasaContainer, sarasa2Container]}
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <Subscribe to={[TodoContainer]}>
                    {(todoContainer) => (
                        <button onClick={() => this.handleClick(todoContainer.addTodo)}>Agregar</button>
                    )}
                </Subscribe>
            </div>
        )
    }
}

export default AddTodo