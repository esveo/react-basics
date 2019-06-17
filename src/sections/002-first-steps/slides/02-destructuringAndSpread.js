import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';

export const destructuringAndSpreadSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`Destructuring`} tag="JS recap" />
    <CodeBlock lang="jsx" source={raw('../examples/destructuring.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Object rest spread, argument spread and array spread`}
      tag="JS recap"
    />
    <CodeBlock lang="jsx" source={raw('../examples/jsSpread.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JSX spread`} />
    <CodeBlock lang="jsx" source={raw('../examples/jsxSpread.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Combining destructuring and spread`} tag="JS recap" />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/destructuringAndSpread.js')}
    />
    <Footer />
  </Slide>
];
