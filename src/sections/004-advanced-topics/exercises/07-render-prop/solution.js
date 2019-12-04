import { key } from './key';
import { renderPropExerciseSlides } from './slides';
import { init } from './src';

export const renderPropSolution = {
  name: 'Render Prop',
  thunk: key,
  init,
  exerciseSlides: renderPropExerciseSlides
};
