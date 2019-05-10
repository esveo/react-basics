import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { performanceExerciseSlides } from './slides';
import { init } from './src';

export const performanceSolution = {
  name: 'Improving Performance',
  thunk: key,
  init,
  exercisePath: pathToExercise(performanceExerciseSlides)
};
