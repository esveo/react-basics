function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }

  return (
    <div>
      {todos.map(todo => (
        <li key={todo.id} onClick={toggleTodo}>
          {todo.text}
        </li>
      ))}
    </div>
  );
}
