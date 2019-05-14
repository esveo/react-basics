import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { introducingStateExerciseSlides } from '../exercises/03-introducingState/slides';

export const introducingStateSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="State in the component tree" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="useState" />
    <CodeBlock lang="jsx" source={raw('../examples/useState.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="useState" tag="API" />
    <CodeBlock lang="jsx" source={'useState(initialState)'} />
    <Heading size={6} textAlign="left">
      Returns a tuple (array with two elements). The first element is the
      current state, the second element is the setter function
    </Heading>
    <List>
      <ListItem>
        <Code>initialState</Code>: Any value that is the initial state.
      </ListItem>
      <ListItem>
        returns tuple <Code>[currentState, setState]</Code>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  ...introducingStateExerciseSlides,

  <Slide>
    <Header text={`Recap ${dash} React`} />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
