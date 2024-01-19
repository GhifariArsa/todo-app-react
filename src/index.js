import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initTasks } from "./data/repository";

// Initialising an empty array for tasks in local storage
initTasks();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
