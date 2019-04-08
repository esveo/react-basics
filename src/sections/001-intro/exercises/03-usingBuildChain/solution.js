import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { usingBuildChainExerciseSlides } from './slides';
import { init } from './src';

export const usingBuildChainSolution = {
  name: 'Using the build chain',
  thunk: key,
  init,
  exercisePath: pathToExercise(usingBuildChainExerciseSlides)
};
