import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../context/AppContext';


function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} To Do's</h2>
  );
}

export { TodoCounter };
