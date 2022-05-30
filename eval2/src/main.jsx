import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RegistrationContextProvider } from "./Context/RegistrationContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegistrationContextProvider>
        <App />
      </RegistrationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
