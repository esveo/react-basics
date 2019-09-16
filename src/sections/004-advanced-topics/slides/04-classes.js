import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import lifecycleUrl from './lifecycle.png';

export const classesSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Previously: functions with useState and useEffect" />
    <CodeBlock source={raw('../examples/functions-vs-classes-1.js')} />
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Component Classes" />
    <div style={{ fontSize: '0.8em' }}>
      <CodeBlock source={raw('../examples/functions-vs-classes-2.js')} />
    </div>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Lifecycle" />
    <img
      src={lifecycleUrl}
      alt="Lifecycle of React Components"
      style={{ width: '45em' }}
    />
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
    <CodeBlock source={raw('../examples/this-1.js')} />
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
    <CodeBlock source={raw('../examples/this-2.js')} />
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
    <CodeBlock source={raw('../examples/this-3.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Problems of Component Classes" />
    <List>
      <ListItem>
        <Code>this</Code> can still be confusing sometimes
      </ListItem>
      <ListItem>No reuse of state / lifecycle methods possible</ListItem>
      <ListItem>Separation by time of call, not by concern</ListItem>
    </List>
    <Text left>
      <b>
        Start new components as functions and use hooks.
        <br />
        Don't migrate old class components for the purpose of updating.
      </b>
    </Text>
    <Footer />
  </Slide>
];
