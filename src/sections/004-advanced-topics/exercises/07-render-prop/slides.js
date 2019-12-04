/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const renderPropExerciseSlides = [
  <Slide>
    <Header text="Build a modal button" tag="Exercise" />
    <List>
      <ListItem>
        Create a file <Code>ModalButton.js</Code> and build a component, that
        has an internal state <Code>modalOpen</Code>.
      </ListItem>
      <ListItem>
        In this component, render a <Code>Button</Code>. Pass all props to this
        rendered button and set an <Code>onClick</Code> function, that toggles
        the <Code>modalOpen</Code> state.
      </ListItem>
      <ListItem>
        Define propTypes for one prop: <br />
        <Code>renderModal</Code>: This should be a function, that will be called
        from the modalButton, when the <Code>modalOpen</Code> state is{' '}
        <Code>true</Code>. (
        <b>
          Remove this props from the props passed to the internal{' '}
          <Code>Button</Code>:{' '}
          <Code>{`const { renderModal, ...rest } = props`}</Code>
        </b>
        )
      </ListItem>
      <ListItem>
        When <Code>modalOpen</Code> is <Code>true</Code>, call the{' '}
        <Code>renderModal</Code> function, and pass a function, that closes the
        modal
        <br />
        <Code style={{ whiteSpace: 'pre' }}>{`<>
  <Button {...rest} onClick={...}></Button>
  {modalOpen && renderModal(() => setModalOpen(false))}
</>`}</Code>
      </ListItem>
      <ListItem>Use this new ModalButton to render the help modal.</ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
