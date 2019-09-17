/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const testingExerciseSlides = [
  <Slide>
    <Header text="Testing your application" tag="Exercise" />
    <List>
      <ListItem>
        run <Code>npm run test</Code> in your project folder
      </ListItem>
      <ListItem>
        Export <Code>satelliteReducer</Code> form <Code>Satellites.js</Code>.
      </ListItem>
      <ListItem>
        Create a new file <Code>Satellites.test.js</Code>. Jest should pick it
        up instantly.
      </ListItem>
      <ListItem>
        Write one unit test for every action this reducer handles.
      </ListItem>
      <ListItem>Write a unit test for the case of an unknown action.</ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
