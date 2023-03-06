import React from "react";
import '../styles/TodoInfo.css'
import List from "../assets/fabulous-to-do-list.png";

function TodoInfo() {
  return (
    <div>
      <h1 className="title">Bienvenido a tu lista de To Do's</h1>
      <br/>
      <h5 className="subtitle">Esta aplicacion fue realizada con la intención de que tu puedas guardar acá tu lista de To Do's y que no se pierdan cuando cierres la aplicación</h5>
      <p className='instruction'>En la siguiente sección encontrarás una lista con tus To Do's que has y que no has realizado, ademas de un buscador para que puedas encontrar tus To Do's mas fácil</p>
      <img className="todo-list-image" src={List}/>
      
    </div>
  );
}

export { TodoInfo };
