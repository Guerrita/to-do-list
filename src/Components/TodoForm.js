import React, { useContext, useState } from "react";
import '../styles/TodoForm.css'

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = useState("");


  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length > 0) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className='TodoForm'>
      <label>Escribe tu nuevo todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Pon tu tarea"
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
