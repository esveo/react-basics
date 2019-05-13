import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';

export const classesSlides = [
  <Slide>
    <Header text="Previously: functions with useState and useEffect" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Component Classes" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Lifecycle" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header
      text={
        <>
          <Code>this</Code> in JavaScript
        </>
      }
      tag="JS recap"
    />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Problems of Component Classes" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
