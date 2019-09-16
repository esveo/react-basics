function App(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadTodos(props.userId).then(setTodos);
  }, [props.userId]);

  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <input value={filter} onChange={handleChange} />
    </div>
  );
}
