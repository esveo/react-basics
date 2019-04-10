import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { introducingStateExerciseSlides } from './slides';
import { init } from './src';

export const introducingStateSolution = {
  name: 'Introducing state',
  thunk: key,
  init,
  exercisePath: pathToExercise(introducingStateExerciseSlides)
};
