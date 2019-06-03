import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';

export const stylingInReactSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Previously: import css files" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Disadvantages" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Alternatives: CSS Modules, CSS in JS" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];