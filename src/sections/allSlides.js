import { introSlides } from './001-intro/slides';
import { firstStepsSlides } from './002-first-steps/slides';
import { buildingTheAppSlides } from './003-building-the-app/slides';
import { advancedTopicsSlides } from './004-advanced-topics/slides';
import { globalSlides } from './globalSlides';

export const allSlides = [
  ...introSlides,
  ...firstStepsSlides,
  ...buildingTheAppSlides,
  ...advancedTopicsSlides
];

globalSlides.push(...allSlides);
