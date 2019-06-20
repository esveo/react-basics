function Controlled() {
  const [value, setValue] = useState('');
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => setValue('')}>Reset</button>
      <p>Current value: {value}</p>
    </div>
  );
}

function Uncontrolled() {
  const [value, setValue] = useState('');
  return (
    <div>
      <input onChange={e => setValue(e.target.value)} />
      <p>Current value: {value}</p>
    </div>
  );
}
