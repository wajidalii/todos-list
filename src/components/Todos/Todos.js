import React from "react";
import TodoItem from "./TodoItem";
function Todos(props) {
  return (
    <div className="container">
      <h1 className="text-center">My Todo List</h1>
      {props.myTodos.length ? (
        props.myTodos.map((todo) => (
          <div>
            <TodoItem
              todo={todo}
              key={todo.srNum}
              onDeleteTodo={props.onDeleteTodo}
            />
          </div>
        ))
      ) : (
        <div>
          <p>No Todos Found... Please add some todos</p>
        </div>
      )}
    </div>
  );
}

export default Todos;
