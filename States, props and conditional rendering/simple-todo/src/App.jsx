import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoInput } from "./components/todoItem";

function App() {
  return (
    <div className="App">
      <TodoInput />
    </div>
  );
}

export default App;
