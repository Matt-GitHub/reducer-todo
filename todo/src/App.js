import React from "react";
import "./App.css";
import TodoFunction from "./components/todo";
import TaskForm from "./components/form";

function App() {
  return (
    <div className="App">
      <h1>To Do App With useReducer()</h1>
      <TaskForm />
      {/* <TodoFunction /> */}
    </div>
  );
}

export default App;
