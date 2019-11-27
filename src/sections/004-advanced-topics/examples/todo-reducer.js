/**
 * state: {
 *   todos: [
 *    { id: 1, text: 'Clean house', done: false },
 *    { id: 2, text: 'Make todo list', done: true }
 *   ],
 *   filter: null
 * }
 */
function todoReducer(state, action) {
  switch (action.type) {
    // Action { type: 'SET_TODOS, todos: [] }
    case 'SET_TODOS':
      return { ...state, todos: action.todos };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, state.todo] };
    default:
      return state;
  }
}
