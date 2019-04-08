import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { initialSetupExerciseSlides } from './slides';
import { init } from './src';

export const initialSetupSolution = {
  name: 'Initial Setup',
  thunk: key,
  init,
  exercisePath: pathToExercise(initialSetupExerciseSlides)
};
