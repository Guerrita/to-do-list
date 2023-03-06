import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../context/AppContext'
import '../styles/global.css'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
