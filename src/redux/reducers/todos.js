import { ADD_TODO, TOGGLE_TODO } from '../constants/todos'

export default function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.data,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}
