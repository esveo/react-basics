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
        Implement the Link component that takes the following props
        <List>
          <ListItem>
            <Code>href</Code>: the target link
          </ListItem>
          <ListItem>
            <Code>name</Code>: the text that will be displayed
          </ListItem>
        </List>
        Don't forget <Code>import React from 'react'</Code>
      </ListItem>
      <ListItem>
        Forward the href prop to an <Code>a</Code> tag and add the className
        prop <Code>app-link</Code>
      </ListItem>
      <ListItem>
        Import <Code>Link.css</Code> from <Code>Link.js</Code> and apply some
        styles
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
        Use your newly create <Code>Link</Code> component (don't forget the
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
