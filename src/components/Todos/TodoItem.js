import React from "react";

function TodoItem({ todo, onDeleteTodo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteTodo(todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
