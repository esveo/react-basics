import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../../__helpers/dash';
import { Code } from '../../../../__helpers/slides/Code';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Heading } from '../../../../__helpers/slides/Heading';
import { ALink, Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { scheduleSlide } from '../../../../__helpers/slides/Schedule';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const satelliteFormExerciseSlides = [
  <Slide>
    <Heading>Good morning</Heading>
  </Slide>,
  scheduleSlide,
  <Slide>
    <Heading>Summary</Heading>
  </Slide>,
  <Slide>
    <Header
      text={`Build a form to edit satellites ${dash} part 1`}
      tag="Exercise"
    />
    <List>
      <ListItem>
        Create new files <Code>SatelliteForm.js</Code> and{' '}
        <Code>SatelliteForm.css</Code>
      </ListItem>
      <ListItem>
        Define a new component <Code>SatelliteForm</Code> and add propTypes:
        <List>
          <ListItem>
            <Code>onSave</Code> (req.): function, that will be called, whenever
            the form is saved. It is called with the updated satellite.
          </ListItem>
          <ListItem>
            <Code>onDelete</Code> (req.): function, that will be called,
            whenever the delete button in the form is clicked. It is called with
            the satellite to be deleted.
          </ListItem>
          <ListItem>
            <Code>satellite</Code>: The initial value for the form state.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Define a constant <Code>defaultFormState</Code> outside of the{' '}
        <Code>SatelliteForm</Code> component and initialize it to:
        <br />
        <Code>
          {'{ name: "", reverse: false, angle: 0, type: "communication" }'}
        </Code>
      </ListItem>

      <ListItem>
        Create a new state variable <Code>formState</Code> in the{' '}
        <Code>SatelliteForm</Code> and initialize it to{' '}
        <Code>props.satellite || defaultFormState</Code>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Build a form to edit satellites ${dash} part 2`}
      tag="Exercise"
    />
    <List>
      <ListItem>
        Render a <Code>form</Code> component and form controls and add the
        correct <Code>value</Code> and <Code>onChange</Code> functions that
        update the local component state:
        <List>
          <ListItem>
            name: <Code>{'&lt;input type="text" value={...} &gt;'}</Code>
          </ListItem>
          <ListItem>
            reverse:{' '}
            <Code>{'&lt;input type="checkbox" checked={...} &gt;'}</Code>
          </ListItem>
          <ListItem>
            angle:{' '}
            <Code>
              {
                '&lt;input type="range" value={...} min="..." max="..." step="..." &gt;'
              }
            </Code>
          </ListItem>
          <ListItem>
            type: <Code>{'&lt;select value={...} &gt;'}</Code> (Check the{' '}
            <ALink
              target="_blank"
              href="https://reactjs.org/docs/forms.html#the-select-tag"
            >
              React docs
            </ALink>{' '}
            on how to use the select tag.)
          </ListItem>
        </List>
      </ListItem>

      <ListItem>
        Implement a submit handler that calls the <Code>onSave</Code> function
        from <Code>props</Code> with the current <Code>formState</Code>.
      </ListItem>

      <ListItem>
        Implement a reset handler that resets the <Code>formState</Code> to its
        initial value.
      </ListItem>

      <ListItem>
        Implement a delete handler that calls the <Code>onDelete</Code> function
        from <Code>props</Code> with the satellite from props.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Build a form to edit satellites ${dash} part 3`}
      tag="Exercise"
    />
    <List>
      <ListItem>
        Add a submit button to the form that is only enabled when the name field
        is not empty.
      </ListItem>

      <ListItem>
        Add a reset button to the form that calls <Code>handleReset</Code> on
        click.
      </ListItem>

      <ListItem>
        Add a delete button to the form that is only enabled when{' '}
        <Code>props.satellite</Code> is defined that calls{' '}
        <Code>handleDelete</Code> on click.
      </ListItem>
      <ListItem>
        Define a new function <Code>handleSave(satellite)</Code> in the{' '}
        <Code>App</Code> component that adds the satellite when no satellite is
        selected (with a new id, created with{' '}
        <Code>(Math.random() * 99999).toFixed(0)</Code>) or updates the
        currently selected satellite.
        <br />
        <b>Note: Don't mutate your data.</b>
      </ListItem>

      <ListItem>
        Define a new function <Code>handleDelete(satellite)</Code> in the{' '}
        <Code>App</Code> component, that deletes the given satellite from the
        local state (without mutation).
      </ListItem>

      <ListItem>
        Use the <Code>SatelliteForm</Code> in your <Code>App</Code> component
        and pass in the required props.
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
