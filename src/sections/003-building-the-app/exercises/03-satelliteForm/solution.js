import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { satelliteFormExerciseSlides } from './slides';
import { init } from './src';

export const satelliteFormSolution = {
  name: 'Satellite form',
  thunk: key,
  init,
  exercisePath: pathToExercise(satelliteFormExerciseSlides)
};
