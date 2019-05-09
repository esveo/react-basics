import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { simpleStateManagementExerciseSlides } from './slides';
import { init } from './src';

export const simpleStateManagementSolution = {
  name: 'Simple State Managamanet',
  thunk: key,
  init,
  exercisePath: pathToExercise(simpleStateManagementExerciseSlides)
};
