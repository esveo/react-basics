import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { List, ListItem } from '../../../__helpers/slides/List';

export const meetingReactSlides = [
  <Slide>
    <Header text="Meeting React – Pure React" />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI
    </Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Meeting React – Pure React" />
    <Heading fit>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI-Description
    </Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Meeting React – Pure React" />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactNoJSX-01.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Meeting React – UI as a tree" />
    <CodeBlock lang="jsx" source={raw('../examples/meetingReactNoJSX-02.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Meeting React – basic API" tag="API" />
    <CodeBlock
      lang="jsx"
      source={'React.createElement(type, [props], [...children])'}
    />
    <Heading size={6} textAlign="left">
      Creates a description of something that will be rendered.
    </Heading>
    <List>
      <ListItem>
        <Code>type</Code>: The type of component that should be rendered.
      </ListItem>
      <ListItem>
        <Code>props</Code>: Properties that will be passed to the component.
      </ListItem>
      <ListItem>
        <Code>children</Code>: ReactNodes that will be passed as children to the
        component.
        <List>
          <ListItem>
            ReactNodes can be of one of the following types:
            <br />
            <Code>ReactElement</Code>, <Code>String</Code>, <Code>number</Code>,{' '}
            <Code>boolean</Code>, <Code>null</Code> and{' '}
            <Code>{'Array<ReactNode>'}</Code>
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Meeting React – basic API" tag="API" />
    <CodeBlock lang="jsx" source={'ReactDOM.render(reactNode, container)'} />
    <Heading size={6} textAlign="left">
      Render given ReactNode (UI-Description) into the DOM
    </Heading>
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

  <Slide>
    <Header text="Meeting React" tag="Exercise" />

    <Footer />
  </Slide>
];
