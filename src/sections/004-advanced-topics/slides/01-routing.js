import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { routingExerciseSlides } from '../exercises/01-routing/slides';

export const routingSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Benefits of routing" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Clientside vs. serverside routing" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Libraries" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Introduction to react-router" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Router" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Route" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="RenderProp" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Link" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Switch" tag="API" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  ...routingExerciseSlides
];
