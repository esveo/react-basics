import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { childrenPropExerciseSlides } from '../exercises/06-children-prop/slides';
import { renderPropExerciseSlides } from '../exercises/07-render-prop/slides';

export const patternSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="The children prop" />
    <Text>
      When the client wants to decide what is rendered in a libary component.
    </Text>
    <CodeBlock source={raw('../examples/children-prop.js')} />
    <Footer />
  </Slide>,
  ...childrenPropExerciseSlides,
  <Slide>
    <Header text="RenderProp" />
    <Text>
      When you want to decide what is visible in a parent component while
      needing state from this parent.
    </Text>
    <CodeBlock source={raw('../examples/render-prop.js')} />
    <Footer />
  </Slide>,
  ...renderPropExerciseSlides
];
