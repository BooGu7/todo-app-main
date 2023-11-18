import React from 'react'
import toggleNight from '../assets/images/icon-moon.svg'


const HeaderTodo = () => {
  return (
    <div className='headerTodo'>
      <h1 className='headerTodo_title'>TODO</h1>
      <div className='headerTodo_toggle'>
        <img src={toggleNight} alt="toggle" />
      </div>
    </div>
  )
}

export default HeaderTodo;