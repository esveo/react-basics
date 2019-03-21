import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const usingBuildChainExerciseSlides = [
  <Slide>
    <Header text="Using build chain" tag="Exercise" />
    <List>
      <ListItem>
        Replace all calls to <Code>React.createElement</Code> with JSX
      </ListItem>
      <ListItem>
        Move the definition of the app constant into another file (
        <Code>app.js</Code>) and export it.
      </ListItem>
      <ListItem>
        Import the app constant from the <Code>index.js</Code> file and render
        it.
      </ListItem>
      <ListItem>
        Create <Code>app.css</Code> and import this file in <Code>app.js</Code>
      </ListItem>
      <ListItem>Have fun styling your app.</ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
