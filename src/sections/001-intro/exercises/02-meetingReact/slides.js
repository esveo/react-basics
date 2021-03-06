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
        Import <Code>React</Code> from <Code>'react'</Code> and{' '}
        <Code>ReactDOM</Code> from <Code>'react-dom'</Code>
      </ListItem>
      <ListItem>
        Retrieve the DOM element with the id "root" from the document and save
        it in a variable (hint: use <Code>document.getElementById</Code>)
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
            Add a <Code>header</Code>, <Code>main</Code> and <Code>footer</Code>{' '}
            element inside the <Code>app-root</Code>.
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
        Render the description of the app into the retrieved DOM node.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
