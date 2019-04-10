import React, { useState } from 'react';

export function App(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className="app-root">
      <main>
        <button onClick={increment}>{props.counter}</button>
      </main>
      <footer />
    </div>
  );
}
