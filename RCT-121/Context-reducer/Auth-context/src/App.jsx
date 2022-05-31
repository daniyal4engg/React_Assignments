import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Onother } from "./components/onother";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Onother />
    </div>
  );
}

export default App;
