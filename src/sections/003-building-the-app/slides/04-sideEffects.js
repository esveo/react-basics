import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { sideEffectsExerciseSlides } from '../exercises/04-sideEffects/slides';

export const sideEffectsSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Reminder: Render is a pure function" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Use cases: onRenderWithProp" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="useEffect" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} examples`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} how to use dependencies`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} preventing calls with useMemo`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...sideEffectsExerciseSlides
];
