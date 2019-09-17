import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { performanceExerciseSlides } from '../exercises/04-performance/slides';
import { ReactComponent as TopDownRenderingSVG } from './top-down-rendering.svg';

export const performanceSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="A few words before we start" />
    <List>
      <ListItem>
        Performance in web applications and web frameworks is a tricky topic
      </ListItem>
      <ListItem>
        There are numerous performance comparisons (
        <ALink href="https://github.com/krausest/js-framework-benchmark">
          example
        </ALink>
        )
      </ListItem>
      <ListItem>
        All common web frameworks are <b>fast enough</b>. Runtime performance
        should not be the deciding factor.
      </ListItem>
      <ListItem>
        Don't think about performance too early:{' '}
        <b>Premature optimization is the root of all evil</b>
      </ListItem>
      <ListItem>
        <b>Measure first</b>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Basics: React rendering" />
    <Columns>
      <Column>
        <ColumnHead>1. update state</ColumnHead>
        <List>
          <ListItem>
            React does <b>not automatically</b> track variables
          </ListItem>
          <ListItem>
            All updates to the DOM <b>start with an update of state</b> in React
            via <Code>setState</Code> or <Code>dispatch</Code>
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>2. render</ColumnHead>
        <List>
          <ListItem>
            React <b>completely rebuilds</b> the tree of{' '}
            <Code>ReactElements</Code>
          </ListItem>
          <ListItem>
            This tree is called the <b>VDOM</b> - the virtual DOM
          </ListItem>
          <ListItem>
            <b>This is very fast</b> because it happens completly in memory,
            without any changes to the visible UI
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>3. reconcile</ColumnHead>
        <List>
          <ListItem>
            The new version of the VDOM is compared to the previous version
          </ListItem>
          <ListItem>All differences result in DOM updates</ListItem>
          <ListItem>
            This way, the DOM only gets touched in places where updates really
            happened.
          </ListItem>
        </List>
      </Column>
    </Columns>
  </Slide>,

  <Slide>
    <Header text="Basics: Top down rendering." />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>
            By default, every state update results in all children updating.
          </ListItem>
          <ListItem>
            Most of the time this is no problem, because rendering is cheap.
          </ListItem>
          <ListItem>
            <b>When you notice performance problems</b> this process can be
            stopped at a node, when props did not change.
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <TopDownRenderingSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React.memo" />
    <CodeBlock source={raw('../examples/react-memo-1.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React.memo" />
    <CodeBlock source={raw('../examples/react-memo-2.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React.memo" />
    <CodeBlock source={raw('../examples/react-memo-3.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React.memo" />
    <CodeBlock source={raw('../examples/react-memo-4.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React.memo" />
    <CodeBlock source={raw('../examples/react-memo-5.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="useMemo" tag="API" />
    <CodeBlock lang="jsx" source={'useMemo(factoryFunction, [dependencies])'} />
    <Heading size={6} textAlign="left">
      Returns the result of the factory function, while only rebuilding it when
      a dependency changes.
    </Heading>
    <List>
      <ListItem>
        <Code>factoryFunction</Code>: Function that returns some value
        (function, object, array, number, etc.).
      </ListItem>
      <ListItem>
        <Code>dependencies</Code>: To prevent recalling the factory on every
        render, an array of values can be supplied. The factory will only be
        recalled when at least one of the dependency values changes.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Steps" />
    <List>
      <ListItem>
        <b>Notice a performance problem.</b>
      </ListItem>
      <ListItem>
        Measure with browser dev tools to see if you can find the use of an
        expensive function.
      </ListItem>
      <ListItem>
        If yes, apply algorithm knowledge to optimize your function.
      </ListItem>
      <ListItem>
        Measure with react dev tools to see if expensive components are
        rerendered needlessly.
      </ListItem>
      <ListItem>
        If yes, apply React Performance APIs <Code>useMemo</Code>,{' '}
        <Code>React.memo</Code> or <Code>useCallback</Code> to improve the
        performance.
      </ListItem>
      <ListItem>Repeat until performance is fine.</ListItem>
    </List>
    <Footer />
  </Slide>,

  ...performanceExerciseSlides
];
