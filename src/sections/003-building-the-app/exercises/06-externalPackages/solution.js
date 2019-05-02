import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { externalPackagesExerciseSlides } from './slides';
import { init } from './src';

export const externalPackagesSolution = {
  name: 'External Packages',
  thunk: key,
  init,
  exercisePath: pathToExercise(externalPackagesExerciseSlides)
};
