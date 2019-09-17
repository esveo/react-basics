function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
const PerformantButton = React.memo(Button);

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useMemo(function createMemoizedValue() {
    return function handleClick() {
      setCount(count => count + 1);
    };
  }, []);
  return (
    <div>
      {count}
      <Button text="Click me" onClick={handleClick} />
      <PerformantButton text="Click me too" onClick={handleClick} />
    </div>
  );
}
