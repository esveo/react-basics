import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { dataFlowExerciseSlides } from '../exercises/02-dataFlow/slides';

export const dataFlowSlides = [
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
