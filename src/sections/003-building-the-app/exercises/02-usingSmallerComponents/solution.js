import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { usingSmallerComponentsExerciseSlides } from './slides';
import { init } from './src';

export const usingSmallerComponentsSolution = {
  name: 'Using smaller components',
  thunk: key,
  init,
  exercisePath: pathToExercise(usingSmallerComponentsExerciseSlides)
};
