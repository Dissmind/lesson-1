import React from "react";
import { TodoItem } from "../todo-item/todo-item";
import { string, bool, arrayOf, shape } from "prop-types";

/**
 *
 * @todos {todo[]} список тудушек
 */
export const TodoList = ({ todos = [] }) => {
  return (
    <ul>
      {todos.map((t) => (
        <TodoItem todo={t} key={t.id} />
      ))}
    </ul>
  );
};

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: string,
      isDone: bool,
      title: string,
    })
  ),
};
