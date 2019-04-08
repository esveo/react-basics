import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const meetingReactExerciseSlides = [
  <Slide>
    <Header text="Meeting React" tag="Exercise" />
    <List>
      <ListItem>
        Remove the <Code>alert</Code> line from <Code>index.js</Code>
      </ListItem>
      <ListItem>
        Import <Code>React</Code> and <Code>ReactDOM</Code>
      </ListItem>
      <ListItem>
        Build the description of the following app with{' '}
        <Code>React.createElement</Code> calls:
        <List>
          <ListItem>
            Create a <Code>div</Code> element with the class{' '}
            <Code>app-root</Code>
          </ListItem>
          <ListItem>
            Create a <Code>header</Code>, <Code>main</Code> and{' '}
            <Code>footer</Code> element inside the <Code>app-root</Code>.
          </ListItem>
          <ListItem>
            Add a <Code>nav</Code> to the header.
          </ListItem>
          <ListItem>
            Add 3 <Code>a</Code> elements that link to google, yahoo and bing
            inside of the nav.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
