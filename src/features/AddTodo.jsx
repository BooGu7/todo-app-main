import React from 'react'

const AddTodo = () => {
  return (
    <button className="listTask">
        <input type='radio' className='listTask_radio'/>
        <div className='listTask_content'>Create a new todo...</div>
    </button>
  )
}

export default AddTodo