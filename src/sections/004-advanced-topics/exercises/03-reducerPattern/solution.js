import { key } from './key';
import { reducerPatternExerciseSlides } from './slides';
import { init } from './src';

export const reducerPatternSolution = {
  name: 'Reducer Pattern',
  thunk: key,
  init,
  exerciseSlides: reducerPatternExerciseSlides
};
