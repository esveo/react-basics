import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { sideEffectsExerciseSlides } from './slides';
import { init } from './src';

export const sideEffectsSolution = {
  name: 'Side Effects',
  thunk: key,
  init,
  exercisePath: pathToExercise(sideEffectsExerciseSlides)
};
