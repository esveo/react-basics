function useClickCounter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const handleClick = () => setCounter(c => c + 1);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
  const resetCounter = () => setCounter(0);
  return { counter, resetCounter };
}

function App() {
  const clickCounter = useClickCounter();
  return (
    <MainComponent
      counter={clickCounter.counter}
      reset={clickCounter.resetCounter}
    />
  );
}
