import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const fromStaticJSXToComponentsExerciseSlides = [
  <Slide>
    <Header text="React Components" tag="Exercise" />
    <List>
      <ListItem>
        Add new files <Code>Link.js</Code> and <Code>Link.css</Code>
      </ListItem>
      <ListItem>
        Implement and export the Link component that takes the following props
        <List>
          <ListItem>
            <Code>href</Code>: the target url
          </ListItem>
          <ListItem>
            <Code>name</Code>: the text that will be displayed
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Forward the href prop to an <Code>a</Code> tag, add the className{' '}
        <Code>app-link</Code> and pass the name as children
      </ListItem>
      <ListItem>
        Import <Code>Link.css</Code> from <Code>Link.js</Code> and apply some
        styles to the app-link class.
      </ListItem>
      <ListItem>Export the Link component</ListItem>
      <ListItem>
        Rename <Code>app.js</Code> and <Code>app.css</Code> to{' '}
        <Code>App.js</Code> and <Code>App.css</Code>
      </ListItem>
      <ListItem>
        Implement the current static jsx in <Code>App.js</Code> as a React
        Component and export it
      </ListItem>
      <ListItem>
        Use your newly created <Code>Link</Code> component (don't forget the
        import)
      </ListItem>
      <ListItem>
        Use the <Code>App</Code> component in <Code>index.js</Code>
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
