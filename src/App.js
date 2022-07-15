import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar curso intro a React",
    completed: false,
  },
  {
    text: "Llorar",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos}>
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
