import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const serverCommunicationExerciseSlides = [
  <Slide>
    <Header text={`Get the data from the server`} tag="Exercise" />
    <List>
      <ListItem>
        Create a new file <Code>satelliteApi.js</Code>
      </ListItem>
      <ListItem>
        Implement async functions and with the correct fetch calls and export
        them:
        <List>
          <ListItem>
            <Code>export async function getSatellites()</Code>
          </ListItem>
          <ListItem>
            <Code>export async function createSatellite(newSatellite)</Code>
          </ListItem>
          <ListItem>
            <Code>export async function updateSatellite(updatedSatellite)</Code>
          </ListItem>
          <ListItem>
            <Code>export async function deleteSatellite(updatedSatellite)</Code>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Trigger the <Code>getSatellites</Code> call in the{' '}
        <Code>useEffect</Code> of the app component and put the result into the
        satellites state.
      </ListItem>
      <ListItem>
        Call the correct functions from the <Code>satelliteApi</Code> for
        create, update and delete and merge the results into the{' '}
        <Code>satellites</Code> state.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
