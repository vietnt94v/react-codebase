import { ADD_TODO, TOGGLE_TODO } from '../constants/todos'

const initialState = {
  todos: []
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}
