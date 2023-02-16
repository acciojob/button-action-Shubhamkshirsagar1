import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const clickHandler = () => {
    document.getElementById("para").style.display = "block";
  };

  return (
    <div className="App" id="main">
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click"></button>
      <button id="click" onClick={clickHandler}>
        Click me
      </button>
    </div>
  );
};

export default App;
