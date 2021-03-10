import React from 'react'

function TodoItem({ name, onClick, completed }) {
  return (
    <li
      onClick={onClick}
      className={`cs-pt ${completed ? 'text-secondary' : null}`}
    >
      {name}
    </li>
  )
}

export default TodoItem
