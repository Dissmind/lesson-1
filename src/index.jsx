import React from "react";
import { render } from "react-dom";
import { TodoPage } from "./components/todo-page/todo-page";

const Root = () => (
  <React.StrictMode>
    <TodoPage />
    
    {/* TODO: add SettingsPage components */}
  </React.StrictMode>
);

render(<Root />, document.getElementById("root"));
