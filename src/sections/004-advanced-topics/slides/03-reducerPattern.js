import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { reducerPatternExerciseSlides } from '../exercises/03-reducerPattern/slides';

export const reducerPatternSlides = [
  <Slide>
    <Header text="Previously: useState" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Modelling your application via actions" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Reducers: Handling the actions" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Putting it together: useReducer" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...reducerPatternExerciseSlides,

  <Slide>
    <Header text="Redux" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Adding features to a Redux app" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
