function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={setCounter(c => c + 1)}>Increment</button>
    </div>
  );
}
