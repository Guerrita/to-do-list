import React from "react";
import '../styles/TodoInfo.css'
import List from "../assets/fabulous-to-do-list.png";

function TodoInfo() {
  return (
    <div>
      <h1 className="title">Bienvenido a tu lista de To Do's</h1>
      <br />
      <p className='instruction'>
      Esta aplicación te permitirá almacenar tus listas de tareas pendientes (To-Do's) de manera segura, evitando que se pierdan al cerrar la aplicación. En la sección correspondiente, podrás visualizar una lista de tus To-Do's realizados y pendientes, y también contarás con un práctico buscador para encontrarlos con mayor facilidad.
        </p>
      <img className="todo-list-image" src={List} />

    </div>
  );
}

export { TodoInfo };
