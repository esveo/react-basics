import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';

/**
 * This is only needed to embed the exercises into the training-app.
 * Simply put the body of this function into your index.js file and replace container with
 * document.getElementById('root')
 */
export const init = container => {
  ReactDOM.render(<App />, container);
};
