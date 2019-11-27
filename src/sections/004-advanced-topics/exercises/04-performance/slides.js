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

export const performanceExerciseSlides = [
  <Slide>
    <Header
      text="Identifying and fixing performance bottlenecks"
      tag="Exercise"
    />
    <List>
      <ListItem>
        Display the sum of all numbers from 1 to 1e9 (1 billion) above all
        satellites in <Code>SatelliteSelect</Code>. Calculate this number in a
        separate function that you call from the <Code>SatelliteSelect</Code>{' '}
        function.
      </ListItem>
      <ListItem>
        Check the performance profiler of your browser and look for bottlenecks
        when switching between satellites and when selecting the already
        selected satellite.
      </ListItem>
      <ListItem>
        Check the React performance profiler of your browser and look for
        bottlenecks when switching between satellites and when selecting the
        already selected satellite.
      </ListItem>
      <ListItem>
        Apply React.memo to <Code>SatelliteSelect</Code>.
      </ListItem>
      <ListItem>Apply useMemo to the computation of the sum.</ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
