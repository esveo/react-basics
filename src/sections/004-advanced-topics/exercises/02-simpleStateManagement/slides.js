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

export const simpleStateManagementExerciseSlides = [
  <Slide>
    <Header text="Handle satellites in a separated container" tag="Exercise" />
    <List>
      <ListItem>
        Install the package <Code>unstated-next</Code>.
      </ListItem>
      <ListItem>
        Create a file <Code>Satellites.js</Code>.
      </ListItem>
      <ListItem>
        Move the satellites state and all updating functions from{' '}
        <Code>App.js</Code> into a new <Code>useSatellites</Code> hook in{' '}
        <Code>Satellite.js</Code>.
      </ListItem>
      <ListItem>
        Create and export an unstated-container from <Code>Satellites.js</Code>{' '}
        with your new <Code>useSatellites</Code> hook.
      </ListItem>
      <ListItem>
        Create and export an unstated-container with the name{' '}
        <Code>Satellites</Code> from <Code>Satellites.js</Code> with your new{' '}
        <Code>useSatellites</Code> hook.
      </ListItem>
      <ListItem>
        Add the <Code>Satellites.Container</Code> around the <Code>Route</Code>{' '}
        in your <Code>index.js</Code>.
      </ListItem>
      <ListItem>
        Remove the <Code>satellites</Code> prop from{' '}
        <Code>SatelliteSelect</Code>.
      </ListItem>
      <ListItem>
        Remove the <Code>onSave</Code> and <Code>onDelete</Code> prop from{' '}
        <Code>SatelliteForm</Code>.
      </ListItem>
      <ListItem>
        Use the <Code>Satellites</Code> container in <Code>App.js</Code>,{' '}
        <Code>SatelliteForm.js</Code> and <Code>SatelliteSelect.js</Code>.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
