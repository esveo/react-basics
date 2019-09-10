import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
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
    <Header text="Form state libraries" />
    <List>
      <ListItem>Form state can become very complex very quickly.</ListItem>
      <ListItem>
        States that could be usefull:
        <List>
          <ListItem>Current value of fields</ListItem>
          <ListItem>Current validity of fields (derived state)</ListItem>
          <ListItem>Have the fields been touched already?</ListItem>
          <ListItem>Have the fields changed from their base value?</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Libraries can help with these state updates
        <List>
          <ListItem>
            <ALink href="https://github.com/jaredpalmer/formik" target="_new">
              Formik
            </ALink>
          </ListItem>
          <ListItem>
            <ALink
              href="https://github.com/final-form/react-final-form"
              target="_new"
            >
              React Final Form
            </ALink>
          </ListItem>
          <ListItem>Build your own library for you own special needs.</ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Form controls" />
    <List>
      <ListItem>
        In addition to state, you need to build useable, accessible form
        controls:
        <List>
          <ListItem>Text input</ListItem>
          <ListItem>Number input</ListItem>
          <ListItem>Typeahead (text input with suggestions)</ListItem>
          <ListItem>Dropdown select</ListItem>
          <ListItem>Multi select</ListItem>
          <ListItem>Radio button</ListItem>
          <ListItem>Checkbox</ListItem>
          <ListItem>Date picker</ListItem>
          <ListItem>Color picker</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Rule of thumb: For small projects, choose a library, for example{' '}
        <ALink href="https://react.semantic-ui.com/" target="_new">
          Semantic UI
        </ALink>{' '}
        or{' '}
        <ALink href="https://material-ui.com/" target="_new">
          Material UI
        </ALink>
      </ListItem>
      <ListItem>
        For larger projects: Build your own to deliver a cohesive experience
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
