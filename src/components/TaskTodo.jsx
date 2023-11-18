import React from 'react'
import { AddTodo, Todo } from '../features'

const TaskTodo = () => {
  return (
    <div className='container-todo'>
        {/* Create a new todo */}
        <AddTodo />
        {/* List todo */}
        <Todo />
    </div>
  )
}

export default TaskTodo