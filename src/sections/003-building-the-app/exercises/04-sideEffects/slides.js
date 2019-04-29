import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const sideEffectsExerciseSlides = [
  <Slide>
    <Header text={`Use useEffect in your app`} tag="Exercise" />
    <List>
      <ListItem>
        In your <Code>App</Code> component, initialize the satellites state to
        an empty array and add a <Code>useEffect</Code> hook, that sets the
        state to the dummy data on the initial render. We will get this data
        from a server in a later step.
      </ListItem>
      <ListItem>
        In <Code>SatelliteForm</Code> call the <Code>handleReset</Code>{' '}
        function, whenever the selected satellite changes. Use a{' '}
        <Code>useEffect</Code> hook and specify the correct dependencies.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
