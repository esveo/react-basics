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

export const routingExerciseSlides = [
  <Slide>
    <Header
      text="Move the selectedSatelliteId from React state into the route"
      tag="Exercise"
    />
    <List>
      <ListItem>
        Install the package <Code>react-router-dom</Code>.
      </ListItem>
      <ListItem>
        Add the HashRouter around <Code>{'<App />'}</Code> in the{' '}
        <Code>index.js</Code>.
      </ListItem>
      <ListItem>
        Remove <Code>onChange</Code> from the props and propTypes of{' '}
        <Code>SatelliteSelect</Code>
      </ListItem>
      <ListItem>
        Remove the <Code>onClick</Code> function from the <Code>li</Code>-tag in{' '}
        <Code>SatelliteSelect</Code> and render a <Code>Link</Code> inside of
        the <Code>li</Code> and provide the <Code>to</Code> prop as{' '}
        <Code>{'{`/${satellite.id}`}'}</Code>
      </ListItem>
      <ListItem>
        Replace the <Code>{'<App />'}</Code> tag in <Code>index.js</Code> with{' '}
        <Code>
          {
            '<Route path="/:satelliteId" children={(routerProps) => <App {...routerProps} />} />'
          }
        </Code>
      </ListItem>
      <ListItem>
        Pull the selectedSatelliteId from <Code>match.params.satelliteId</Code>{' '}
        in the <Code>App</Code> component.
        <br />
        <b>Note</b>: match will be <Code>null</Code> when route is not matching.
      </ListItem>
      <ListItem>
        Change the <Code>onClick</Code> callback in the create button to
        <br />
        <Code>() => props.history.push('/')</Code>
      </ListItem>

      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
