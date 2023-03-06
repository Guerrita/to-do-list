import React from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoContext } from "../context/AppContext";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { TodoInfo } from "../Components/TodoInfo";
import { MainContainer } from "../Components/MainContainer";
import "../styles/global.css";
import { TodoLoading } from "../Components/TodoLoading";
import { EmptyTodos } from "../Components/EmptyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <MainContainer>
      <section className="main-container--section">
        <TodoInfo />
      </section>

      <section className="main-container--section">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <TodoLoading/>}
          {!loading && !searchedTodos.length && <EmptyTodos/>}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>
    </MainContainer>
  );
}

export { AppUI };
