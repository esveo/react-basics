import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { meetingReactExerciseSlides } from './slides';
import { init } from './src';

export const meetingReactSolution = {
  name: 'Meeting React',
  thunk: key,
  init,
  exercisePath: pathToExercise(meetingReactExerciseSlides)
};