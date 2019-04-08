import React from 'react';
import './app.css';

const urls = ['https://google.de', 'https://yahoo.de', 'https://bing.de'];

export const app = (
  <div className="app-root">
    <header>
      <nav>
        {urls.map(url => (
          <a href={url} key={url}>
            {url}
          </a>
        ))}
      </nav>
    </header>
    <main />
    <footer />
  </div>
);
