import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { dataFlowExerciseSlides } from './slides';
import { init } from './src';

export const dataFlowSolution = {
  name: 'Data Flow',
  thunk: key,
  init,
  exercisePath: pathToExercise(dataFlowExerciseSlides)
};
