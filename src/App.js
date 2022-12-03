import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import { AddTodo } from "./components/Todos/AddTodo";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Navbar title={"My Todo List"} searchBar={true} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo onAddTodo={onAddTodo} />
              <Todos myTodos={myTodos} onDeleteTodo={onDeleteTodo} />
            </>
          }
        />
        <Route
          path="/showtodos"
          element={<Todos myTodos={myTodos} onDeleteTodo={onDeleteTodo} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
