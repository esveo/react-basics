import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { initialSetupExerciseSlides } from '../exercises/initialSetup/slides';

export const preambelSlides = [
  <Slide>
    <Header text="About us" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Who are you?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="What do we want to achieve?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  getTOCSlide(),

  <Slide>
    <Header text={`State of JS ${dash} The early days`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Frameworks`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Build Chains`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  ...initialSetupExerciseSlides
];
