import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const usingSmallerComponentsExerciseSlides = [
  <Slide>
    <Header text="Refactor the satellite select" tag="Exercise" />
    <List>
      <ListItem>
        Create new files <Code>SatelliteSelect.js</Code> and{' '}
        <Code>SatelliteSelect.css</Code>
      </ListItem>
      <ListItem>
        Install the <Code>prop-types</Code> package:{' '}
        <Code>npm i prop-types</Code>
      </ListItem>
      <ListItem>
        Define a new component <Code>SatelliteSelect</Code> and add propTypes:
        <List>
          <ListItem>
            <Code>onChange</Code>: function, that will be called whenever a new
            satellite is selected. It is called with the <Code>id</Code> of the
            satellite.
          </ListItem>
          <ListItem>
            <Code>selectedSatelliteId</Code>: The id of the selected satellite.
          </ListItem>
          <ListItem>
            <Code>satellites</Code>: List of all selectable satellites.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Move the implementation of the select from the <Code>App.js</Code> into{' '}
        <Code>SatelliteSelect.js</Code>
      </ListItem>

      <ListItem>
        Use the <Code>SatelliteSelect</Code> in your <Code>App</Code> component.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
