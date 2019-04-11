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

export const satelliteSelectExerciseSlides = [
  <Slide>
    <Header text={`Building the select ${dash} part 1`} tag="Exercise" />
    <List>
      <ListItem>
        Clear your <Code>App</Code> Component render method.
      </ListItem>
      <ListItem>
        Render three sections with differing class names (e.g.{' '}
        <Code>satellite-select</Code>, <Code>satellite-details</Code> and{' '}
        <Code>satellite-visualization</Code>)
      </ListItem>

      <ListItem>
        Add a state variable <Code>satellites</Code> and set the initial value
        to an array of 4 satellite objects with following properties:
        <List>
          <ListItem>
            <Code>id</Code>: string
          </ListItem>
          <ListItem>
            <Code>name</Code>: string
          </ListItem>
          <ListItem>
            <Code>reverse</Code>: boolean
          </ListItem>
          <ListItem>
            <Code>speed</Code>: number (0 - 5)
          </ListItem>
          <ListItem>
            <Code>type</Code>: 'communication' | 'military' | 'science'
          </ListItem>
        </List>
      </ListItem>

      <ListItem>
        Render the satellites as <Code>li</Code> tags inside a <Code>ul</Code>{' '}
        tag. (use the <Code>[].map</Code> function and don't forget the{' '}
        <Code>key</Code>)
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Building the select ${dash} part 2`} tag="Exercise" />
    <List>
      <ListItem>
        Define a new function <Code>onSatelliteClick(satellite)</Code> in the{' '}
        <Code>App</Code> component, that sets a new state variable{' '}
        <Code>selectedSatellite</Code>. Call this function in the anonymous
        onClick handler on each <Code>li</Code> tag.
      </ListItem>

      <ListItem>
        Add a class to the selected <Code>li</Code> tag to style it differently.
      </ListItem>

      <ListItem>
        Render the name of the selected satellite in the{' '}
        <Code>satellite-details</Code> section.
      </ListItem>

      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
