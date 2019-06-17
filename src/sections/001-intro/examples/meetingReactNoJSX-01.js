import React from 'react';
import ReactDOM from 'react-dom';

// Creating the description of a h1 element with a text content
const app = React.createElement('h1', null, 'Hello World!');
/**
 * Result:
 * {
 *  $$typeof: Symbol(react.element),
 *  props: {children: "Hello World!"},
 *  type: "h1"
 * }
 */

// Instructing react to show the desired content in the root element
ReactDOM.render(app, document.getElementById('root'));
