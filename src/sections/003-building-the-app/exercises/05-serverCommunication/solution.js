import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { serverCommunicationExerciseSlides } from './slides';
import { init } from './src';

export const serverCommunicationSolution = {
  name: 'Server Communication',
  thunk: key,
  init,
  exercisePath: pathToExercise(serverCommunicationExerciseSlides)
};
