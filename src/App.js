import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
import { AddTodo } from "./components/Todos/AddTodo";
import "./App.css";
import { useState } from "react";

function App() {
  const [myTodos, setMyTodos] = useState([
    {
      title: "Apply for job",
      desc: "Apply for job online",
      srNum: 1,
    },
    {
      title: "Go to Market",
      desc: "Got to Market to buy something",
      srNum: 2,
    },
    {
      title: "Get HairCut",
      desc: "Get hair cut",
      srNum: 3,
    },
    {
      title: "Get HairCut4",
      desc: "Get hair cut",
      srNum: 4,
    },
    {
      title: "Get HairCut5",
      desc: "Get hair cut",
      srNum: 5,
    },
    {
      title: "Get HairCut6",
      desc: "Get hair cut",
      srNum: 6,
    },
  ]);
  const onDeleteTodo = (todo) => {
    return setMyTodos(myTodos.filter((myTodo) => todo !== myTodo));
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
