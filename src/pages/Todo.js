import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import FilterTodo from '../components/TodoFilter'

function Todo() {
  return (
    <div className='todo'>
      <AddTodo />
      <TodoList />
      <FilterTodo />
    </div>
  )
}

export default Todo
