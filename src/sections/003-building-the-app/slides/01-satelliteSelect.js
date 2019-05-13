import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { satelliteSelectExerciseSlides } from '../exercises/01-satelliteSelect/slides';

export const satelliteSelectSlides = [
  <Slide>
    <Header text="Building Satellite Control" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Building the Satellite Select" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Rendering lists ${dash} keys`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Rendering lists ${dash} anonymous functions as event handlers`}
    />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Conditional rendering`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...satelliteSelectExerciseSlides
];
