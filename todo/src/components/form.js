import React, { useState, useReducer } from "react";
import { initialState, ToDoReducer } from "../reducer/reducer";
import TodoFunction from "./todo";

const TaskForm = () => {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleChanges = e => {
    setNewTask(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "SET_TASK", payload: newTask });
    setNewTask("");
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={newTask}
          onChange={handleChanges}
        />
        <button type="submit">Add Task</button>
      </form>
      <button onClick={handleClear}>Destroy Completed</button>
      <div>
        {state.map(task => {
          console.log("new task", task);
          return (
            <TodoFunction
              task={task}
              toggleCompleted={toggleCompleted}
              key={task.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskForm;
