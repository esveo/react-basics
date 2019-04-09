import React from 'react';
import './App.css';
import { Link } from './Link';

const urls = ['https://google.de', 'https://yahoo.de', 'https://bing.de'];

export function App() {
  return (
    <div className="app-root">
      <header>
        <nav>
          {urls.map(url => (
            <Link href={url} key={url} name={url} />
          ))}
        </nav>
      </header>
      <main />
      <footer />
    </div>
  );
}
