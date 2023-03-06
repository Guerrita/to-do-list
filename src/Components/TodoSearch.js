import React, { useContext } from "react";
import { TodoContext } from "../context/AppContext";
import "../styles/TodoSearch.css";

function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext)
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar un To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
