import { ADD_TODO, TOGGLE_TODO } from '../constants/todos'

let nextTodo = 0

export const addTodo = data => ({
  type: ADD_TODO,
  payload: {
    id: nextTodo++,
    data
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id: nextTodo++,
    payload: id
  }
})
