import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Text } from '../../../__helpers/slides/Text';

export const patternSlides = [
  <Slide>
    <Header text="RenderProp" />
    <Text>
      Special prop: <b>Function</b> that will be called by the target component
      (with or without arguments) that <b>returns a ReactNode</b>
      <br />
      Usefull when you want to pass data from your component to the children of
      your component.
    </Text>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="RenderProp" />
    <CodeBlock source={raw('../examples/render-prop.js')} />
    <Footer />
  </Slide>
];
