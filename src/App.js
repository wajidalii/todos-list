import Navbar from "./components/Navbar/Navbar";
import Todos from "./components/Todos/Todos";
import Footer from "./components/Footer/Footer";
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
  ]);
  const onDelete = (todo) => {
    return setMyTodos(myTodos.filter((myTodo) => todo !== myTodo));
  };
  const onAdd = (todo) => {
    return setMyTodos(...myTodos, todo);
  };
  return (
    <>
      <Navbar title={"My Todo List"} searchBar={true} />
      <Todos myTodos={myTodos} onDelete={onDelete} onAdd={onAdd} />
      <Footer />
    </>
  );
}

export default App;
