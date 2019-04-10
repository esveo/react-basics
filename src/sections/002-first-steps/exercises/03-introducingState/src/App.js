import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { Link } from './Link';

const urls = ['https://google.de', 'https://yahoo.de', 'https://bing.de'];

export function App(props) {
  const [counter, setCounter] = useState(0);
  const [offset, setOffset] = useState(1);

  function incrementCounter() {
    setCounter(counter + offset);
  }
  function decrementCounter() {
    setCounter(counter - offset);
  }
  function incrementOffset() {
    setOffset(offset + 1);
  }
  function decrementOffset() {
    setOffset(offset - 1);
  }

  return (
    <div className="app-root">
      <header>
        <nav>
          {urls.map(url => (
            <Link href={url} key={url} name={url} />
          ))}
        </nav>
      </header>
      <main>
        <div>
          <h1>Counter: {counter}</h1>
          <Button onClick={decrementCounter}>-</Button>{' '}
          <Button onClick={incrementCounter}>+</Button>
        </div>
        <div>
          <h1>Offset: {offset}</h1>
          <Button onClick={decrementOffset}>-</Button>{' '}
          <Button onClick={incrementOffset}>+</Button>
        </div>
      </main>
      <footer />
    </div>
  );
}
