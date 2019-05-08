import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { routingExerciseSlides } from './slides';
import { init } from './src';

export const routingSolution = {
  name: 'Routing',
  thunk: key,
  init,
  exercisePath: pathToExercise(routingExerciseSlides)
};
