/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../../__helpers/dash';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const simpleStateManagementExerciseSlides = [
  <Slide>
    <Header
      text={`Handle satellites in a separated container ${dash} Part 1`}
      tag="Exercise"
    />
    <List>
      <ListItem>
        Create a file <Code>Satellites.js</Code>.
      </ListItem>
      <ListItem>
        Move the satellites state, the effect that loads them and all updating
        functions from <Code>App.js</Code> into a new <Code>useSatellites</Code>{' '}
        hook in <Code>Satellite.js</Code>. <br />
        <b>Note:</b> Don't forget to return the state and the updating functions
        from this hook.
      </ListItem>
      <ListItem>
        Leave the logic for the selectedSatellite in <Code>App.js</Code>
      </ListItem>
      <ListItem>
        Create a React Context <Code>SatelliteContext</Code> and the
        corresponding Provider in <Code>Satellites.js</Code>
      </ListItem>
      <ListItem>
        Build and export a new Component <Code>GlobalSatelliteProvider</Code>{' '}
        that uses the <Code>useSatellites</Code> hook and supplies the result to
        the SatelliteContextProvider. <br />
        <b>Note:</b> Don't forget to render the <Code>children</Code> prop
        inside of the SatelliteContextProvider.
      </ListItem>
      <ListItem>
        Build and export a new custom hook <Code>useGlobalSatellites</Code> in
        which you extract the value from the <Code>SatelliteContext</Code>.
      </ListItem>
      <ListItem>
        You have now built your first reusable global state container!
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Handle satellites in a separated container ${dash} Part 2`}
      tag="Exercise"
    />
    <List>
      <ListItem>
        Add the <Code>GlobalSatelliteProvider</Code> around the <Code>App</Code>{' '}
        in your <Code>index.js</Code>
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
        Use the <Code>useGlobalSatellites</Code> hook in <Code>App.js</Code>,{' '}
        <Code>SatelliteForm.js</Code> and <Code>SatelliteSelect.js</Code> to
        retrieve and update satellites.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
