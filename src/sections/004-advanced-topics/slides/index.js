import { classesSlides } from './classes';
import { reducerPatternSlides } from './reducerPattern';
import { routingSlides } from './routing';
import { simpleStateManagementSlides } from './simpleStateManagement';
import { stylingInReactSlides } from './stylingInReact';
import { testingSlides } from './testing';

export const advancedTopicsSlides = [
  ...routingSlides,
  ...simpleStateManagementSlides,
  ...reducerPatternSlides,
  ...classesSlides,
  ...stylingInReactSlides,
  ...testingSlides
];
