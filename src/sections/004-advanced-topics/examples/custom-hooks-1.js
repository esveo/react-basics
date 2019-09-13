function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function handleClick() {
      setCounter(counter => counter + 1);
    }
    document.addEventListener('click', handleClick);
    return function cleanup() {
      document.removeEventListener('click', handleClick);
    };
  });

  function resetCounter() {
    setCounter(0);
  }
  // App
  return <MainComponent />;
}
