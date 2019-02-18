import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This is only needed to embed the exercises into the training-app.
 * Simply put the body of this function into your index.js file and replace container with
 * document.getElementById('root')
 */
export const init = container => {
  const app = React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello World'),
    React.createElement(
      'ul',
      null,
      [1, 2, 3].map(number =>
        React.createElement('li', { key: number }, number)
      )
    )
  );

  ReactDOM.render(app, container);
};
