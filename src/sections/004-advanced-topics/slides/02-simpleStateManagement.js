import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { scheduleSlide } from '../../../__helpers/slides/Schedule';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { simpleStateManagementExerciseSlides } from '../exercises/02-simpleStateManagement/slides';
import { ReactComponent as ContextSVG } from './context.svg';
import { DemoComponentWithSource } from './DemoComponentWithSource';
import { ReactComponent as GlobalVSLocalStateSVG } from './global-vs-local-state.svg';

export const simpleStateManagementSlides = [
  <Slide>
    <Heading>Good morning</Heading>
  </Slide>,
  scheduleSlide,
  <Slide>
    <Heading>Summary</Heading>
  </Slide>,
  <Slide>
    <DemoComponentWithSource />
  </Slide>,
  getTOCSlide(),

  <Slide>
    <Header text={`State Management ${dash} global vs. local`} />
    <Columns align="center">
      <Column weight={1}>
        <List>
          <ListItem>
            Lift state upwards above all components that depend on it.
          </ListItem>
          <ListItem>
            State needs to be passed down through all components to reach the
            target:
            <br />
            <b>Prop-drilling</b>
          </ListItem>
          <ListItem>Can become cumbersome quickly.</ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <GlobalVSLocalStateSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State Management ${dash} options`} />
    <Columns>
      <Column>
        <ColumnHead>useState</ColumnHead>
        <List>
          <ListItem>Local state</ListItem>
          <ListItem>Easy to reason about</ListItem>
          <ListItem>Props need to be drilled down</ListItem>
          <ListItem>Complete rerender when updating top-level state</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>context API</ColumnHead>
        <List>
          <ListItem>Provide state for the complete sub-tree</ListItem>
          <ListItem>Only rerender subscribed components</ListItem>
          <ListItem>More complex and harder to test</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>global state management</ColumnHead>
        <List>
          <ListItem>State lives outside of react</ListItem>
          <ListItem>Selected components are beeing connected</ListItem>
          <ListItem>Better performance</ListItem>
          <ListItem>State logic is independent from UI framework.</ListItem>
          <ListItem>
            Libraries:
            <List>
              <ListItem>
                <ALink href="https://redux.js.org/" target="_new">
                  Redux
                </ALink>
              </ListItem>
              <ListItem>
                <ALink href="https://mobx.js.org/" target="_new">
                  Mobx
                </ALink>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Context API: Provide values for React sub tree`} />
    <Columns align="center">
      <Column weight={1}>
        <List>
          <ListItem>
            Add a <Code>Provider</Code> to supply an arbitrary value to all{' '}
            <Code>Consumers</Code>
          </ListItem>
          <ListItem>Data will flow outside of the react tree</ListItem>
          <ListItem>
            <Code>Consumers</Code> will be updated automatically when data
            changes
          </ListItem>
          <ListItem>Use separate context for each piece of data.</ListItem>
        </List>
      </Column>
      <Column weight={3}>
        <ContextSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Context API ${dash} example`} />
    <CodeBlock source={raw('../examples/context-1.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Context API ${dash} example`} />
    <CodeBlock source={raw('../examples/context-2.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Detour ${dash} custom hooks`} />
    <List>
      <ListItem>
        Until now, we used Reacts builtin hooks
        <List>
          <ListItem>useState</ListItem>
          <ListItem>useEffect</ListItem>
          <ListItem>useContext</ListItem>
        </List>
      </ListItem>
      <ListItem>
        We built statefull logic and protocols with these primitives
      </ListItem>
      <ListItem>
        <b>Problem:</b> we built it non-reusable
      </ListItem>
      <ListItem>
        <b>Solution:</b> Custom hooks
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Detour ${dash} custom hooks`} />
    <CodeBlock source={raw('../examples/custom-hooks-1.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Detour ${dash} custom hooks`} />
    <CodeBlock source={raw('../examples/custom-hooks-2.js')} />
    <Footer />
  </Slide>,

  ...simpleStateManagementExerciseSlides
];
