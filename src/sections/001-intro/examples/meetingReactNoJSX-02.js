import React from 'react';
import ReactDOM from 'react-dom';

const app = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'Hello World'),
  React.createElement(
    'ul',
    null,
    [1, 2, 3].map(number => React.createElement('li', { key: number }, number))
  )
);

ReactDOM.render(app, document.getElementById('root'));
