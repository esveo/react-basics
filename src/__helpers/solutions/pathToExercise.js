import { globalSlides } from '../../sections/globalSlides';

export function pathToExercise(slides) {
  const first = slides[0];
  return `#/${globalSlides.indexOf(first) + 1}`;
}
