import React from "react";

export const TodoItem = ({ todo, toggleTodoAction, deleteTodoAction }) => {
  const onToggleHandler = React.useCallback(() => toggleTodoAction(), [
    toggleTodoAction,
  ]);
  const onDeleteHandler = React.useCallback(() => deleteTodoAction(), [
    deleteTodoAction,
  ]);

  return (
    <li>
      {/* TODO add checkbox component*/}
      <input type="checkbox" onClick={onToggleHandler} />

      {todo.title}

      {/* TODO add delete button component*/}
      <button type="button" onClick={onDeleteHandler} />
    </li>
  );
};
