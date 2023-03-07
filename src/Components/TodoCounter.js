import React from 'react';
import '../styles/TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} To Do's</h2>
  );
}

export { TodoCounter };
