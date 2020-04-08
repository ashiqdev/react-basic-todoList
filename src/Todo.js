import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <button onClick={() => props.toggleTask(props.id)}>
        {props.isCompleted ? "X" : "+"}
      </button>
      <button onClick={() => props.removeTask(props.id)}>-</button>
      <div className="task">
        {props.isCompleted ? (
          <del>{props.task}</del>
        ) : (
          <span>{props.task}</span>
        )}
      </div>
    </div>
  );
};

export default Todo;
