import React from 'react';
import './Link.css';

export function Link(props) {
  return (
    <a href={props.href} className="app-link">
      {props.name}
    </a>
  );
}
