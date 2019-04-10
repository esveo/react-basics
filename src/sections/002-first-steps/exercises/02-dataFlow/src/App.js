import React from 'react';
import './App.css';
import { Button } from './Button';
import { Link } from './Link';

const urls = ['https://google.de', 'https://yahoo.de', 'https://bing.de'];

export function App(props) {
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
        <Button onClick={props.increment}>{props.counter}</Button>
      </main>
      <footer />
    </div>
  );
}
