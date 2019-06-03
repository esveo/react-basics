import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { usingBuildChainExerciseSlides } from '../exercises/03-usingBuildChain/slides';

export const usingBuildChainSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="JSX" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JSX ${dash} inline expressions`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JSX ${dash} differences to HTML`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Creating your own modules`} tag="JS recap" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Styles as a module" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  ...usingBuildChainExerciseSlides
];