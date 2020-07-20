import React from 'react';
import { Provider } from "unstated"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
  return (
    <Provider>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
