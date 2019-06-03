import { key } from './key';
import { satelliteFormExerciseSlides } from './slides';
import { init } from './src';

export const satelliteFormSolution = {
  name: 'Satellite form',
  thunk: key,
  init,
  exerciseSlides: satelliteFormExerciseSlides
};
