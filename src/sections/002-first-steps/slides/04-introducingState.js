import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { introducingStateExerciseSlides } from '../exercises/03-introducingState/slides';
import { ReactComponent as DataFlowSVG } from './data-flow.svg';
import { ReactComponent as IntroducingStateSVG } from './introducing-state.svg';

export const introducingStateSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="State in the component tree" />
    <Columns align="center">
      <Column weight={1}>
        <Text left>Problems with global state:</Text>
        <List>
          <ListItem>
            Every state update <b>rerenders the whole React-Tree</b>.
          </ListItem>
          <ListItem>Every state has to be declared globally.</ListItem>
          <ListItem>
            <b>No encapsulation</b> of local states possible.
          </ListItem>
        </List>
      </Column>
      <Column weight={2} p={0}>
        <DataFlowSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="State in the component tree" />
    <Columns align="center">
      <Column weight={1}>
        <Text left>
          Solution: <b>Component state</b>
        </Text>
        <List>
          <ListItem>
            State is declared and managed as close to the bottom of the tree as
            possible
          </ListItem>
          <ListItem>State does not travel through many components.</ListItem>
          <ListItem>
            Updates trigger <b>rerender on fewer components</b>.
          </ListItem>
          <ListItem>
            Statefull <b>logic is encapsulated</b> in components.
          </ListItem>
        </List>
      </Column>
      <Column weight={2} p={0}>
        <IntroducingStateSVG />
      </Column>
    </Columns>
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

  <Slide>
    <Header text="React Hooks" tag="API" />
    <Text>
      <Code>useState</Code> is the first "React Hook" that we will be using.
    </Text>
    <List>
      <ListItem>
        They <b>hook into the React core</b> to provide additional features to
        Function Components (like state).
      </ListItem>
      <ListItem>
        The <b>count</b> and the <b>order</b> of these hooks{' '}
        <b>must never change</b> during the lifecycle of a Component
        <List>
          <ListItem>No conditional calls of hooks</ListItem>
          <ListItem>No hook calls in loops</ListItem>
        </List>
      </ListItem>
      <ListItem>
        If you have a loop, render one Component per iteration.
      </ListItem>
    </List>

    <Footer />
  </Slide>,

  ...introducingStateExerciseSlides,

  <Slide>
    <Header text={`Recap ${dash} React`} />
    <Text left>React ...</Text>
    <List>
      <ListItem>
        ... allows you to think of your UI from a <b>data first</b> approach ...
      </ListItem>
      <ListItem>
        ... while splitting your logic into <b>small encapsulated components</b>{' '}
        ...
      </ListItem>
      <ListItem>
        ... that communicate via <b>props and events/callbacks</b>...
      </ListItem>
      <ListItem>
        ... and can manage <b>local state</b> to keep the global scope clean.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
