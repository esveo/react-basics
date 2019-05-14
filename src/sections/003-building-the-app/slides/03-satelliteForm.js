import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { satelliteFormExerciseSlides } from '../exercises/03-satelliteForm/slides';

export const satelliteFormSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Reminder: One way data flow" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Controlled vs. uncontrolled components" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Building forms" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates ${dash} reasoning`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates ${dash} objects`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates ${dash} lists`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Using the submit event" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Form validations" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...satelliteFormExerciseSlides,

  <Slide>
    <Header text="Form libraries" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
