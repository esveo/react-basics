import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { testingExerciseSlides } from './slides';
import { init } from './src';

export const testingSolution = {
  name: 'Testing',
  thunk: key,
  init,
  exercisePath: pathToExercise(testingExerciseSlides)
};
