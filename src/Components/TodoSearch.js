import React, { useContext } from "react";
import "../styles/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue, loading}) {
  
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
      disabled={loading}
    />
  );
}

export { TodoSearch };
