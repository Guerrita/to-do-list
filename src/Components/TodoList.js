import React from 'react';
import '../styles/TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul className='todos-container'>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
