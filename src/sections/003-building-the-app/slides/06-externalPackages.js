import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { externalPackagesExerciseSlides } from '../exercises/06-externalPackages/slides';

export const externalPackagesSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="npm" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  ...externalPackagesExerciseSlides
];
