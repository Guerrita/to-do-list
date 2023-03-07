import React from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoHeader } from "../Components/TodoHeader";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { useTodos } from "../hooks/useTodos";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { TodoInfo } from "../Components/TodoInfo";
import { MainContainer } from "../Components/MainContainer";
import "../styles/global.css";
import { TodoLoading } from "../Components/TodoLoading";
import { EmptyTodos } from "../Components/EmptyTodos";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <MainContainer>
      <section className="main-container--section">
        <TodoInfo />
      </section>

      <section className="main-container--section">
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos = { totalTodos}
        searchText = { searchValue }
        onError={() => <TodosError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p> }

        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}

      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

        {openModal && (
          <Modal>
            <TodoForm  
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>
    </MainContainer>
  );
}

export default App;
