import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { serverCommunicationExerciseSlides } from '../exercises/05-serverCommunication/slides';

export const serverCommunicationSlides = [
  <Slide>
    <Header text="3 Tier architecture" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Singlethreaded JavaScript" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 1: Callbacks" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 2: Promises" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 2.5: Async/Await" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Example: Fetch" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Exercise preparation: SatelliteAPI" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...serverCommunicationExerciseSlides
];
