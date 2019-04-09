import { pathToExercise } from '../../../../__helpers/solutions/pathToExercise';
import { key } from './key';
import { fromStaticJSXToComponentsExerciseSlides } from './slides';
import { init } from './src';

export const fromStaticJSXToComponentsSolution = {
  name: 'From static JSX to Components',
  thunk: key,
  init,
  exercisePath: pathToExercise(fromStaticJSXToComponentsExerciseSlides)
};
