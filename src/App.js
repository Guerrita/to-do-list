import React, { useState } from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Tomar curso intro a React",
    completed: true,
  },
  {
    text: "Llorar",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push = {text: text, completed: false};
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={todos}>
        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
