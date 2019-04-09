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

export const dataFlowExerciseSlides = [
  <Slide>
    <Header text={`Data flow ${dash} part 1`} tag="Exercise" />
    <List>
      <ListItem>
        Add new files <Code>Button.js</Code> and <Code>Button.css</Code> and
        implement a new component that renders a html <Code>button</Code> tag.
      </ListItem>
      <ListItem>
        Forward all props to the <Code>button</Code> tag with the JSX object
        spread syntax.
      </ListItem>
      <ListItem>
        Overwrite the className prop with <Code>app-button</Code>
      </ListItem>
      <ListItem>
        Import <Code>Button.css</Code> and apply some styles to the{' '}
        <Code>Button</Code> component.
      </ListItem>
      <ListItem>
        Render the <Code>Button</Code> Component somewhere in your{' '}
        <Code>App</Code> component
      </ListItem>
      <ListItem>
        The <Code>App</Code> Component should receive a prop{' '}
        <Code>counter</Code> in the future. Pass this counter as children to the{' '}
        <Code>Button</Code>:<br />
        <Code>{'<Button>{props.counter}</Button>'}</Code>
      </ListItem>
      <ListItem>
        In <Code>index.js</Code> pass <Code>0</Code> to the <Code>App</Code>{' '}
        component as <Code>counter</Code> prop:
        <br />
        <Code>{'<App counter={0} />'}</Code>
      </ListItem>
      <ListItem>
        Check if your app renders correctly when the counter number is changed
        in your source code
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Data flow ${dash} part 2`} tag="Exercise" />
    <List>
      <ListItem>
        The <Code>App</Code> Component should receive another prop{' '}
        <Code>incrementCounter</Code>. Pass this reference as onClick callback
        to the <Code>Button</Code>:<br />
        <Code>
          {'<Button onClick={props.increment}>{props.counter}</Button>'}
        </Code>
      </ListItem>
      <ListItem>
        Add a variable <Code>counter</Code> in the index.js and set it to{' '}
        <Code>0</Code>
      </ListItem>
      <ListItem>
        Add function in the <Code>index.js</Code> that increments the{' '}
        <Code>counter</Code> variable.
      </ListItem>
      <ListItem>
        After incrementing, this function should call{' '}
        <Code>ReactDOM.render</Code> again with the updated data.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
