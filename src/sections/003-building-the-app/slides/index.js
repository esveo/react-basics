import { satelliteFormSlides } from './satelliteForm';
import { satelliteSelectSlides } from './satelliteSelect';
import { serverCommunicationSlides } from './serverCommunication';
import { sideEffectsSlides } from './sideEffects';
import { usingSmallerComponentsSlides } from './usingSmallerComponents';

export const buildingTheAppSlides = [
  ...satelliteSelectSlides,
  ...usingSmallerComponentsSlides,
  ...satelliteFormSlides,
  ...sideEffectsSlides,
  ...serverCommunicationSlides
];
