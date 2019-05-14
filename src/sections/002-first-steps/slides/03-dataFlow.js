import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { dataFlowExerciseSlides } from '../exercises/02-dataFlow/slides';

export const dataFlowSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`Visualizing the component Tree`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Top-Down data flow`} tag="JS recap" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Events to trigger data changes`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Rerenders in React`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...dataFlowExerciseSlides
];
