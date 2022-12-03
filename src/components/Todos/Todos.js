import React from "react";
import TodoItem from "./TodoItem";
function Todos(props) {
  const styles = {
    minHeight: "46vh",
  };
  return (
    <div className="container" style={styles}>
      <h1 className="text-center">My Todo List</h1>
      {props.myTodos.length ? (
        props.myTodos.map((todo) => (
          <div>
            <TodoItem
              todo={todo}
              key={todo.srNum}
              onDeleteTodo={props.onDeleteTodo}
            />{" "}
            <hr />
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
