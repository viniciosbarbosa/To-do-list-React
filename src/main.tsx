import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.module.css";
import { TodoContextProvider } from "./contexts/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoContextProvider>
);
