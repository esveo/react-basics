import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { fromStaticJSXToComponentsExerciseSlides } from '../exercises/01-fromStaticJSXToComponents/slides';

export const fromStaticJSXTOComponentsSlides = [
  <Slide>
    <Header text={`Creating dynamic content with JSX factories`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Create reusable React-Components`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...fromStaticJSXToComponentsExerciseSlides
];
