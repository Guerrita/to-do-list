import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">Has completado {props.completed} de {props.total} TODOs</h2>
  );
}

export { TodoCounter };
