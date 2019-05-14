import React from 'react';
import { pathToExercise } from '../solutions/pathToExercise';
import { Link } from './Link';

export function LinkToSlides(props) {
  return (
    <Link
      {...props}
      to="/slides"
      onClick={() => {
        window.location.replace(pathToExercise(props.slides));
        window.location.reload();
      }}
    />
  );
}
