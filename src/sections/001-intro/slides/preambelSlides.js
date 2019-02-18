import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { Link } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { pathTo } from '../../../__helpers/solutions/pathTo';
import { init } from '../solutions/initialSetup';

export const preambelSlides = [
  <Slide>
    <Header text="About us" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Who are you?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="What do we want to achieve?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  getTOCSlide(),

  <Slide>
    <Header text="State of JS – The early days" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="State of JS – Frameworks" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="State of JS – Build Chains" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

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
            <b>Node.js</b> – validate with <Code>node -v</Code>
          </ListItem>
          <ListItem>
            <b>npm</b> – validate with <Code>npm -v</Code>
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
        directory and add new file <Code>index.js</Code> with just one line{' '}
        <Code>console.log('Hello World')</Code>
      </ListItem>
      <ListItem>
        Compare with your result with <Link to={pathTo(init)}>Solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
