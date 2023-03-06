import React from "react";
import "../styles/MainContainer.css";

function MainContainer({ children }) {
  return <section className="main-container">{children}</section>;
}

export { MainContainer };
