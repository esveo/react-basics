import { allSlides } from '../../sections/allSlides';

export function pathToExercise(slides) {
  const first = slides[0];
  return `#/${allSlides.indexOf(first) + 1}`;
}
