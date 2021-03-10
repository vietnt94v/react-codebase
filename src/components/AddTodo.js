import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions/todos'

function AddTodo({ dispatch }) {
  const [todoName, setTodoName] = useState('')
  const [validateName, setValidateName] = useState(false)

  const handleChangeTodo = e => {
    setTodoName(e.target.value)
    todoName ? setValidateName(false) : setValidateName(true)
  }

  const handleAddTodo = e => {
    e.preventDefault()
    todoName ? dispatch(addTodo(todoName)) : setValidateName(true)

    setTodoName('')
  }

  return (
    <div>
      <form onSubmit={handleAddTodo} className='d-flex align-items-start'>
        <div className='d-flex flex-column '>
          <input type='text' onChange={handleChangeTodo} value={todoName} />
          {validateName ? (
            <p className='text-danger'>Name is required!</p>
          ) : null}
        </div>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
