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

export const initialSetupExerciseSlides = [
  <Slide>
    <Header text="Initial Setup" tag="Exercise" />
    <List>
      <ListItem>
        Make sure the required programms are installed
        <List>
          <ListItem>
            <b>Chrome</b> or <b>Firefox</b>
          </ListItem>
          <ListItem>
            <b>Node.js</b> {dash} validate with <Code>node -v</Code>
          </ListItem>
          <ListItem>
            <b>npm</b> {dash} validate with <Code>npm -v</Code>
          </ListItem>
          <ListItem>
            Editor/IDE: <b>Visual Studio Code</b> (recommended), WebStorm, Atom,
            etc.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>Navigate into your development folder</ListItem>
      <ListItem>
        Run this command: <Code>npx create-react-app react-basics</Code>
      </ListItem>
      <ListItem>Navigate into the newly created folder</ListItem>
      <ListItem>
        Run <Code>npm run start</Code>
      </ListItem>
      <ListItem>
        When this step is working, delete everything in the <Code>/src</Code>{' '}
        directory and add a new file <Code>index.js</Code> with just one line{' '}
        <Code>alert('Hello World')</Code>
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
