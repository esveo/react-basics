const initialTodoState = { todos: [], filter: '' };

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  function addTodo(text) {
    dispatch({
      type: 'ADD_TODO',
      text,
      id: Math.floor(Math.random() * 9999),
      done: false
    });
  }
  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  return <div>{/* Application that uses the functions */}</div>;
}
