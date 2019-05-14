import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { simpleStateManagementExerciseSlides } from '../exercises/02-simpleStateManagement/slides';

export const simpleStateManagementSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`State Management ${dash} global vs. local`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`State Management ${dash} options`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`State Management ${dash} options`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Context API: Provide values for React sub tree`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Context API`} tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Unstated`} tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...simpleStateManagementExerciseSlides
];
