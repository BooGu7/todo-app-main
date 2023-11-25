import React from "react";
import { StatusTodo } from "./index";

const data = [
  {
    key: 1,
    content: "Complete online JavaScript",
    checked: true,
  },
  {
    key: 2,
    content: "Jog around the park 3x",
    checked: false,
  },
  {
    key: 4,
    content: "Read for 1 hour",
    checked: false,
  },
  {
    key: 5,
    content: "Pick up groceries",
    checked: false,
  },
  {
    key: 6,
    content: "Complete Todo App in Frontend Mentor",
    checked: false,
  },
];

const Todo = () => {
  return (
    <div className="listTask_container">
      {data.map((list) => (
        <div key={list.key} className="listTask_container-item">
          <input
            checked={list.checked}
            type="checkbox"
            className="listTask_checkbox"
          />
          <div className="listTask_text">{list.content}</div>
        </div>
      ))}
      <StatusTodo />
    </div>
  );
};

export default Todo;
