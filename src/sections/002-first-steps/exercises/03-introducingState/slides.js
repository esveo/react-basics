import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const introducingStateExerciseSlides = [
  <Slide>
    <Header text={`Using state`} tag="Exercise" />
    <List>
      <ListItem>
        Create variables <Code>counter</Code> and <Code>setCounter</Code> in the{' '}
        <Code>App</Code> component using <Code>useState</Code> with an initial
        value of <Code>0</Code>
      </ListItem>
      <ListItem>
        Create variables <Code>offset</Code> and <Code>setOffset</Code> in the{' '}
        <Code>App</Code> component using <Code>useState</Code> with an initial
        value of <Code>1</Code>
      </ListItem>
      <ListItem>
        Define two functions <Code>incrementCounter</Code> and{' '}
        <Code>decrementCounter</Code> inside of the <Code>App</Code> component.
        These should increment/decrement the <Code>counter</Code> by{' '}
        <Code>offset</Code>.
      </ListItem>

      <ListItem>
        Define two more functions <Code>incrementOffset</Code> and{' '}
        <Code>decrementOffset</Code> inside of the <Code>App</Code> component.
        These should increment/decrement the <Code>offset</Code> by{' '}
        <Code>1</Code>.
      </ListItem>

      <ListItem>
        Display both variables <Code>counter</Code> and <Code>offset</Code> in
        your <Code>App</Code> Component
      </ListItem>
      <ListItem>
        Add 4 buttons, that increment/decrement the counter/offset
      </ListItem>

      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
