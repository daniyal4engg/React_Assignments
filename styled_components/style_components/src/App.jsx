import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Div } from "./components/Div";
// import { Button } from "./components/Div";
import { Button } from "antd";
function App() {
  return (
    <div className="App">
      <Div className="one">
        <Button type="primary">Primary Button</Button>
        <br />
        <Button>Default Button</Button> <br />
        <Button type="dashed">Dashed Button</Button> <br />
      </Div>
      <Div className="two">
        <Button type="text">Text Button</Button>
        <br />
        <Button type="link">Text Button</Button>
      </Div>
    </div>
  );
}

export default App;
