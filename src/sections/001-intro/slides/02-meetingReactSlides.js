import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { meetingReactExerciseSlides } from '../exercises/02-meetingReact/slides';
import { ReactComponent as UITreeSVG } from './ui-tree.svg';

export const meetingReactSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`Meeting React ${dash} Pure React`} />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI
    </Heading>
    <List>
      <ListItem>
        UI code can be seen as <b>pure function</b>.
      </ListItem>
      <ListItem>
        <b>Global state as input</b> data (e.g. sidebarIsOpen, currentFilter,
        selectedUser)
      </ListItem>
      <ListItem>UI as output?</ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} Pure React`} />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI-Description
    </Heading>
    <List>
      <ListItem>
        Return type is just a{' '}
        <b>description of what the UI should look like.</b>
      </ListItem>
      <ListItem>
        This description is <b>handed off to React</b> to adapt the DOM.
      </ListItem>
      <ListItem>
        Transition between UI-states are handled by React. You <b>only</b> need
        to <b>worry about data</b>.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} Pure React`} />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> data
    </Heading>
    <List>
      <ListItem>Description of the UI is a regular JavaScript object.</ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faLongArrowAltRight} /> The result of the
        function is also just data.
      </ListItem>
      <ListItem>
        React allows you to think of your application as a simple data
        transformation.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} Pure React`} />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactNoJSX-01.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`var, let and const`} tag="JS recap" />
    <Text left>There are 3 ways to declare variables in modern JavaScript</Text>
    <List>
      <ListItem>
        <Code>var</Code>: Can be reassigned and is only scoped to functions
      </ListItem>
      <ListItem>
        <Code>let</Code>: Can be reassigned and is scoped to blocks
      </ListItem>
      <ListItem>
        <Code>const</Code>: Cannot be reassigned and is scoped to blocks
      </ListItem>
    </List>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`var, let and const`} tag="JS recap" />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/meetingReactVarLetConst.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`var, let and const`} tag="JS recap" />
    <Text>
      <FontAwesomeIcon icon={faLongArrowAltRight} /> Popular convention:{' '}
      <b>
        Always <Code>const</Code>
      </b>
      , except when reassignment is needed,{' '}
      <b>
        then <Code>let</Code>
      </b>
      .{' '}
      <b>
        Never <Code>var</Code>
      </b>
      .
    </Text>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`functions: declarations vs. expressions vs. arrows`}
      tag="JS recap"
    />
    <Text left>There are 3 ways to define functions in modern JavaScript</Text>
    <List>
      <ListItem>
        <Code>declarations</Code>: "Hoisted" to the top of the scope
      </ListItem>
      <ListItem>
        <Code>expressions</Code>: Don't need a name but are not hoisted
      </ListItem>
      <ListItem>
        <Code>arrow functions</Code>: Much shorter and can use implicit return
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`functions: declarations vs. expressions vs. arrows`}
      tag="JS recap"
    />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/meetingReactFunctions.js')}
    />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JS-modules`} tag="JS recap" />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactExports.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JS-modules`} tag="JS recap" />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactImports.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JS-modules`} tag="JS recap" />
    <Text left>Notes and hints:</Text>
    <List>
      <ListItem>Smaller modules are easier to understand.</ListItem>
      <ListItem>Avoid circular imports by splitting up into 3 files.</ListItem>
      <ListItem>Use automatic imports where possible to avoid typos.</ListItem>
      <ListItem>Many conventions around directory structure.</ListItem>
      <ListItem>
        Most important rule:{' '}
        <b>Split and move functionally when you lose overview</b>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} UI as a tree`} />
    <UITreeSVG style={{ height: '20em' }} />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Meeting React ${dash} UI as a tree`} />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactNoJSX-02.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} basic API`} tag="API" />
    <CodeBlock
      lang="jsx"
      source={'React.createElement(type, [props], [...children])'}
    />
    <br />
    <Text left>
      <b>
        Creates a description of something that will be rendered. (ReactElement)
      </b>
    </Text>
    <List>
      <ListItem>
        <Code>type</Code>: The type of component that should be rendered. (e.g.
        div, h1, a)
      </ListItem>
      <ListItem>
        <Code>props</Code>: Properties that will be passed to the component.
        (e.g. id, className)
      </ListItem>
      <ListItem>
        <Code>children</Code>: ReactNodes that will be passed as children to the
        component.
        <List>
          <ListItem>
            ReactNodes can be of one of the following types:
            <br />
            <Code>ReactElement</Code>, <Code>string</Code>, <Code>number</Code>,{' '}
            <Code>boolean</Code>, <Code>null</Code> and{' '}
            <Code>{'Array<ReactNode>'}</Code>
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Meeting React ${dash} basic API`} tag="API" />
    <CodeBlock lang="jsx" source={'ReactDOM.render(reactNode, container)'} />
    <Text left>
      <b>Render given ReactNode into the DOM</b>
    </Text>
    <br />
    <List>
      <ListItem>
        <Code>reactNode</Code>: Any ReactNode
      </ListItem>
      <ListItem>
        <Code>container</Code>: Any HTMLDOMNode
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  ...meetingReactExerciseSlides
];
