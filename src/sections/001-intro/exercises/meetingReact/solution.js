import path from 'path';
import { fileAbsolute, npmRoot } from 'paths.macro';
import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { meetingReactExerciseSlides } from './slides';
import { init } from './src';

const relative = path.relative(npmRoot, path.join(fileAbsolute, '..'));

export const meetingReactSolution = {
  name: 'Meeting React',
  thunk: key,
  fileSystemPath: path.join(relative, 'src/'),
  init,
  exercisePath: pathToExercise(meetingReactExerciseSlides)
};
