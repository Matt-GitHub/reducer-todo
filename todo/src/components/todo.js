import React from "react";

const TodoFunction = ({ task, toggleCompleted }) => {
  return (
    <div>
      <h1>{task.task}</h1>
      <button onClick={() => toggleCompleted(task.id)}>Complete</button>
    </div>
  );
};

export default TodoFunction;
