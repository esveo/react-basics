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

export const reducerPatternExerciseSlides = [
  <Slide>
    <Header text="Replace useState with useReducer" tag="Exercise" />
    <List>
      <ListItem>
        In <Code>Satellites.js</Code> create a new constant{' '}
        <Code>initialSatellitesState</Code> and set it to an empty array.
      </ListItem>
      <ListItem>
        Define a reducer{' '}
        <Code>{'function satelliteReducer(state, action) {}'}</Code> that
        handles the actions:
        <List>
          <ListItem>
            <Code>{'{ type: "SATELLITES_LOADED", satellites: [] }'}</Code>
          </ListItem>
          <ListItem>
            <Code>{'{ type: "SATELLITE_CREATED", satellite: {} }'}</Code>
          </ListItem>
          <ListItem>
            <Code>{'{ type: "SATELLITE_UPDATED", satellite: {} }'}</Code>
          </ListItem>
          <ListItem>
            <Code>{'{ type: "SATELLITE_DELETED", satellite: {} }'}</Code>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Replace the <Code>useState</Code> in the <Code>useSatellites</Code> hook
        with <Code>useReducer</Code> and dispatch the correct actions from the
        functions.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
