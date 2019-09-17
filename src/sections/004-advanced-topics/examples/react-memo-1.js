function Button({ text }) {
  return <button>{text}</button>;
}
const PerformantButton = React.memo(Button);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {count}
      <Button text="Click me" />
      <PerformantButton text="Click me too" />
    </div>
  );
}
