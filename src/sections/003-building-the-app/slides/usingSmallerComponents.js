import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { usingSmallerComponentsExerciseSlides } from '../exercises/02-usingSmallerComponents/slides';

export const usingSmallerComponentsSlides = [
  <Slide>
    <Header text="React's goal: Smaller composable components" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Options for satellite select" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Reminder about passing props to components" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Defining interfaces with PropTypes" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...usingSmallerComponentsExerciseSlides
];
