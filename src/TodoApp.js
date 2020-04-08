import React, { useState } from "react";
import { todos } from "./data";
import Todo from "./Todo";

const TodoApp = () => {
  const [todoItems, setTodos] = useState([...todos]);
  const [inputVal, setInputValue] = useState("");
  const [currentId, setCurrentId] = useState(todos[todos.length - 1].id);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setTodos(current => [
        {
          id: currentId + 1,
          task: inputVal,
          isCompleted: false
        },
        ...current
      ]);

      setCurrentId(id => id + 1);
      setInputValue("");
    }
  };

  const removeTask = id => {
    setTodos(current => current.filter(todo => todo.id !== id));
  };

  const toggleTask = id => {
    setTodos(current =>
      current.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        }
        return todo;
      })
    );
  };
  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Add a new Task"
        value={inputVal}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {todoItems.map(todo => (
          <Todo
            {...todo}
            key={todo.id}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
