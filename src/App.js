import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import { AddTodo } from "./components/Todos/AddTodo";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let initTodos = [];
  if (localStorage.getItem("todos")) {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [myTodos, setMyTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(myTodos));
  }, [myTodos]);

  const onDeleteTodo = (todo) => {
    setMyTodos(myTodos.filter((myTodo) => todo !== myTodo));
  };

  const onAddTodo = (title, desc) => {
    const srNum = myTodos[myTodos.length - 1]
      ? myTodos[myTodos.length - 1].srNum + 1
      : 1;

    const myTodo = {
      title: title,
      desc: desc,
      srNum: srNum,
    };

    setMyTodos([...myTodos, myTodo]);
  };

  return (
    <>
      <Navbar title={"My Todo List"} searchBar={true} />
      <AddTodo onAddTodo={onAddTodo} />
      <Todos myTodos={myTodos} onDeleteTodo={onDeleteTodo} />
      <Footer />
    </>
  );
}

export default App;
