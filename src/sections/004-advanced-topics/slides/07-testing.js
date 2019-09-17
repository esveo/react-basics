import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { testingExerciseSlides } from '../exercises/05-testing/slides';

export const testingSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Why do we test?" />
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Why do we test?" />
    <Heading>
      We want to make changes to our code base while still beeing confident that
      everything works
    </Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing`} />
    <Columns>
      <Column>
        <ColumnHead>Static tests</ColumnHead>
        <List>
          <ListItem>Tests your code before you run it</ListItem>
          <ListItem>ESLint, TypeScript, Flow</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Unit tests</ColumnHead>
        <List>
          <ListItem>Test isolated modules/functions</ListItem>
          <ListItem>
            Execute your code with defined inputs and expected outputs
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Integration tests</ColumnHead>
        <List>
          <ListItem>
            Test the composition of different modules or components
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>E2E tests</ColumnHead>
        <List>
          <ListItem>
            Test your complete application end to end to find any errors that
            are still left.
          </ListItem>
          <ListItem>
            Use UI-Runners to simulate user interaction and verify expectations.
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Jest as testrunner" />
    <List>
      <ListItem>
        Finds your test files whereever they are in the project
      </ListItem>
      <ListItem>This allows colocation</ListItem>
      <ListItem>Fluent syntax</ListItem>
      <ListItem>
        <ALink targe="_blank" href="https://jestjs.io/docs/en/getting-started">
          API
        </ALink>
      </ListItem>
    </List>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Unit Testing logic functions`} />
    <CodeBlock source={raw('../examples/unit-tests.js')} />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Types of testing ${dash} Snapshot Testing`} />
    <Columns align="center">
      <Column>
        <Text left>Problems:</Text>
        <List>
          <ListItem>
            Fails with literally every change to the UI (even fixing a typo)
          </ListItem>
          <ListItem>Tests too many details</ListItem>
          <ListItem>Conditions you to skip test failures</ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <CodeBlock source={raw('../examples/snapshot-tests.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Types of testing ${dash} Shallow Rendering`} />
    <Columns align="center">
      <Column>
        <Text left>Problems:</Text>
        <List>
          <ListItem>Fails when implementation details change</ListItem>
          <ListItem>Example: Moving markup into a ChildComponent</ListItem>
          <ListItem>
            Requires you to know the internals of the component
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <CodeBlock source={raw('../examples/shallow-rendering-tests.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Types of testing ${dash} Integration Tests`} />
    <Columns align="center">
      <Column>
        <Text left>Advantages:</Text>
        <List>
          <ListItem>Use constant selectors</ListItem>
          <ListItem>Interact with components like the user would</ListItem>
          <ListItem>
            Allows change of implementation details without changing tests
          </ListItem>
          <ListItem>
            <ALink target="_blank" href="https://testing-library.com/">
              Testing Library
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <CodeBlock source={raw('../examples/integration-tests.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Types of testing ${dash} e2e Tests`} />
    <Columns align="center">
      <Column>
        <Text left>Advantages:</Text>
        <List>
          <ListItem>Gain lots of confidence</ListItem>
          <ListItem>Test the complete stack (FE, BE, DB)</ListItem>
        </List>
        <Text left>Problems:</Text>
        <List>
          <ListItem>Hard to maintain</ListItem>
          <ListItem>Tedious to write</ListItem>
        </List>
        <Text left>
          <ALink target="_blank" href="https://docs.cypress.io">
            Cypress
          </ALink>
        </Text>
      </Column>
      <Column weight={2}>
        <CodeBlock source={raw('../examples/e2e-tests.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  ...testingExerciseSlides
];
