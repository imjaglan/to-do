import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import Todo from "./model"; //built the model
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //array of a type and interface

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //prevent the reload

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]); //add the todos in the todos array
      setTodo("");
      console.log(todos);
    }
  };

  console.log(todo);
  return (
    <>
      <div className="App">
        <span className="heading">TO-DO</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
        {/* {todos.map((t) => (
          <li>{t.todo}</li>
        ))} */}
      </div>
    </>
  );
};

export default App;
