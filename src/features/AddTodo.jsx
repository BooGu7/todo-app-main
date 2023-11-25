import React from "react";

const AddTodo = () => {
  return (
    <div className="addTodo">
      <input type="checkbox" className="addTodo_checkbox" />
      <input
        type="text"
        className="addTodo_text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default AddTodo;
