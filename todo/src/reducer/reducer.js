import React from "react";

export const initialState = [
  //   {
  //     task: "Test",
  //     completed: false,
  //     id: Date.now()
  //   }
];

export const ToDoReducer = (state, action) => {
  switch (action.type) {
    // ! case 1 set task
    case "SET_TASK":
      return [
        ...state,
        { task: action.payload, completed: false, id: Date.now() }
      ];
    // ! case 2 set completed
    case "TOGGLE_COMPLETED":
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    // ! case 3 clear completed
    case "CLEAR_COMPLETED":
      return state.filter(task => !task.completed);
    // ** case 3 toggle editing
    case "TOGGLE_EDITING":
      return { ...state };
    // ** case 5 set overdue
    case "SET_OVERDUE":
      return { ...state };
    // return default
    default:
      return state;
  }
};
