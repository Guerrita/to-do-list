import React from 'react';
import '../styles/CreateTodoButton.css';



function CreateTodoButton(props) {
  const onclickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button className="CreateTodoButton" onClick={onclickButton}>+</button>
  );
}

export { CreateTodoButton };
