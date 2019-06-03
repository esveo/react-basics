import { key } from './key';
import { satelliteSelectExerciseSlides } from './slides';
import { init } from './src';

export const satelliteSelectSolution = {
  name: 'Satellite Select',
  thunk: key,
  init,
  exerciseSlides: satelliteSelectExerciseSlides
};
