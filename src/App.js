

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
    <Modal>
      <TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </Modal>
  );
}

export default App;
