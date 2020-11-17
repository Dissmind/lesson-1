import React from "react";
import { render } from "react-dom";

const Root = () => (
  <React.StrictMode>
    <div>
      <h1>Uber* Todo App</h1>

      <ul>
        <li>[ ] погулять</li>
        <li>[ ] купить молока</li>
        <li>
          [ ] стать <del>синьорoм</del> джуном
        </li>
      </ul>

      <p>*Like a "super", not as Uber startup</p>
    </div>
  </React.StrictMode>
);

render(<Root />, document.getElementById("root"));
