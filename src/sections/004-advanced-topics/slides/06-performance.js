import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';

export const performanceSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Premature optimization" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Basics: Top down rendering." />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Steps" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
