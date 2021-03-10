import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions/todos'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
