/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { CodeBlock } from '../../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const childrenPropExerciseSlides = [
  <Slide>
    <Header text="Build a reusable modal" tag="Exercise" />
    <List>
      <ListItem>
        Create files <Code>Modal.js</Code> and <Code>Modal.css</Code>
      </ListItem>
      <ListItem>
        In <Code>Modal.js</Code>, build a component, that renders a{' '}
        <Code>div</Code> as a modal-wrapper. CSS help:
        <CodeBlock
          source={`.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
}
`}
        />
      </ListItem>
      <ListItem>
        In the wrapper, render a modal with fixed height and width and render{' '}
        <Code>props.children</Code> inside.
      </ListItem>
      <ListItem>
        Add a help button to your app, that toggles a <Code>modalOpen</Code>{' '}
        state and render the modal when this is true.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
