import React from "react";
import { StatusTodo } from "./index";

const Todo = () => {
  return (
    <div className="listTask">
      <button>
        <input type="radio" className="listTask_radio" />
        <div className="listTask_content">Complete online JavaScript course</div> 
      </button>
      <StatusTodo />
    </div>
  );
};

export default Todo;
