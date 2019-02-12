import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/slides">Slides</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
      </ul>
    </>
  );
}
