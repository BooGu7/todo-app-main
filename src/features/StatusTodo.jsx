import React from 'react'

const StatusTodo = () => {
  return (
    <div className='listTask_status'>
        <div className='listTask_status_title'>5 items left</div>
        <div className='listTask_status_list'>
            <div className='listTask_status_item'>All</div>
            <div className='listTask_status_item'>Active</div>
            <div className='listTask_status_item'>Completed</div>
        </div>
        <div className='listTask_status_clear'>Clear Completed</div>
    </div>
    )
}

export default StatusTodo