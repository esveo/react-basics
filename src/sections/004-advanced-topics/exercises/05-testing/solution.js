import { key } from './key';
import { testingExerciseSlides } from './slides';
import { init } from './src';

export const testingSolution = {
  name: 'Testing',
  thunk: key,
  init,
  exerciseSlides: testingExerciseSlides
};
