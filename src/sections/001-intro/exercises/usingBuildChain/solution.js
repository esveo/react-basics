import path from 'path';
import { fileAbsolute, npmRoot } from 'paths.macro';
import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { usingBuildChainExerciseSlides } from './slides';
import { init } from './src';

const relative = path.relative(npmRoot, path.join(fileAbsolute, '..'));

export const usingBuildChainSolution = {
  name: 'Using the build chain',
  thunk: key,
  fileSystemPath: path.join(relative, 'src/'),
  init,
  exercisePath: pathToExercise(usingBuildChainExerciseSlides)
};
