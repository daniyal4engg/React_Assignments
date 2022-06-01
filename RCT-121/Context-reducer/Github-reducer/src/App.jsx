import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Github } from "./components/GIthub";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      app
      <div>Github</div>
    </div>
  );
}

export default App;
