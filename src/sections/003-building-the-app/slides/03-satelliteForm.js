import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { satelliteFormExerciseSlides } from '../exercises/03-satelliteForm/slides';
import { ReactComponent as ControlledVsUncontrolledSVG } from './controlledVsUncontrolled.svg';
import { ReactComponent as DataFlowSVG } from './data-flow.svg';

export const satelliteFormSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Reminder: One way data flow" />
    <DataFlowSVG style={{ height: '20em' }} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Controlled vs. uncontrolled components" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>State is does not need to be passed to control</ListItem>
          <ListItem>Parent component is only informed about changes</ListItem>
          <ListItem>No way to change or reset the internalValue</ListItem>
          <ListItem>
            <b>
              Lift state up to where it's needed but keep it as local as
              possible.
            </b>
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <ControlledVsUncontrolledSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Controlled vs. uncontrolled components" />
    <CodeBlock source={raw('../examples/controlledVsUncontrolled.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Building forms" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>Always label your controls appropriately.</ListItem>
          <ListItem>Update state immutably.</ListItem>
          <ListItem>Use builtin html elements where possible.</ListItem>
          <ListItem>
            <ALink href="https://reactjs.org/docs/forms.html" target="_blank">
              React documentation on forms
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column weight={3} p="0">
        <CodeBlock source={raw('../examples/forms.js')} m="0" />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates`} />
    <Columns align="center">
      <Column>
        <CodeBlock source={raw('../examples/mutableUpdates.js')} m="0" />
      </Column>
      <Column style={{ fontSize: '0.7em' }} weight={1.5}>
        <CodeBlock source={raw('../examples/immutableUpdates.js')} m="0" />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates`} />
    <List>
      <ListItem>React needs immutable updates to track changes.</ListItem>
      <ListItem>Immutability reduces bugs (things never change).</ListItem>
      <ListItem>
        Mental model: New objects, reference old values, overwrite changed
        values.
      </ListItem>
      <ListItem>
        Only relevant for <Code>arrays</Code> and <Code>objects</Code>.
      </ListItem>
    </List>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Immutable updates ${dash} objects`} />
    <CodeBlock source={raw('../examples/immutableUpdatesObjects.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Immutable updates ${dash} arrays`} />
    <CodeBlock source={raw('../examples/immutableUpdatesArrays.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Using the submit event" />
    <CodeBlock source={raw('../examples/formSubmitEvent.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Form validations" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>Validation is derived state.</ListItem>
          <ListItem>
            <b>Never store derived state in React state!</b>
          </ListItem>
          <ListItem>Derive the state on each render.</ListItem>
        </List>
      </Column>
      <Column weight={3}>
        <CodeBlock source={raw('../examples/formValidation.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  ...satelliteFormExerciseSlides,

  <Slide>
    <Header text="Form libraries" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
];
