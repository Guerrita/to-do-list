import React from 'react';
import '../styles/CreateTodoButton.css';



function CreateTodoButton(props) {
  const onclickButton = () => {
    props.setOpenModal(!props.openModal);
  }

  return (
    <button className="CreateTodoButton" onClick={onclickButton}>+</button>
  );
}

export { CreateTodoButton };
