import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { testingExerciseSlides } from '../exercises/05-testing/slides';

export const testingSlides = [
  <Slide>
    <Header text={`Types of testing`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Jest as testrunner" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Unit Testing logic functions`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Snapshot Testing`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Shallow Rendering`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Integration Tests`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} e2e Tests`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...testingExerciseSlides,

  <Slide>
    <Header text="Resources" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
