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
    { className: 'app-root' },
    React.createElement(
      'header',
      null,
      React.createElement(
        'nav',
        null,
        React.createElement('a', { href: 'https://google.de' }, 'Google'),
        React.createElement('a', { href: 'https://yahoo.de' }, 'Yahoo'),
        React.createElement('a', { href: 'https://bing.de' }, 'Bing')
      )
    ),
    React.createElement('main'),
    React.createElement('footer')
  );

  ReactDOM.render(app, container);
};
