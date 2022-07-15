import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../context/AppContext'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
