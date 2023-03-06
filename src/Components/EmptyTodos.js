import React from "react";
import NotTodos from '../assets/not-todos.png'
import "../styles/EmptyTodos.css"

function EmptyTodos() {
  return (
    <div>
      <h2 className="empty-todos-title">¡Crea tu primer To Do!</h2>
      <img className="empty-todos-image" src={NotTodos} alt={NotTodos} />
    </div>
  );
}

export {EmptyTodos}
