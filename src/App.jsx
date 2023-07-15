import { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import ToDoList from "./components/todolist/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodo = todos.filter((todo) => text !== todo);
    setTodos(newTodo);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mt-5">
            <div className="card-body">
              <Header />
              <Content todo={todo} setTodo={setTodo} addTodo={addTodo} />
              <ToDoList list={todos} deleteTodo={deleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
