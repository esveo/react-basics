import React from 'react';
import { Heading, Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';

export const preambelSlides = [
  <Slide>
    <Header text="Über uns" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Wer seid ihr?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Wo wollen wir hin?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,
  getTOCSlide(),
  <Slide>
    <Header text="State of JS – The early days" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="State of JS – Frameworks" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="State of JS – Build Chains" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>
];
