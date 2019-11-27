import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { reducerPatternExerciseSlides } from '../exercises/03-reducerPattern/slides';

export const reducerPatternSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Previously: useState" />
    <CodeBlock source={raw('../examples/simple-use-state.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Previously: useState" />
    <CodeBlock source={raw('../examples/complex-use-state.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Previously: useState" />
    <Text left>Problems:</Text>
    <List>
      <ListItem>
        <b>Logic</b> of updates is <b>defined on the call-site</b> of setState.
      </ListItem>
      <ListItem>
        This <b>logic</b> is defined <b>inside of the React Component</b> and
        can not be tested in isolation.
      </ListItem>
      <ListItem>
        Logic makes the rendering part of the <b>Component harder to read</b>.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Step 1: Think about types of action" />
    <List>
      <ListItem>
        <Code>SET_TODOS</Code>: Save all todos after loading from server
      </ListItem>
      <ListItem>
        <Code>ADD_TODO</Code>: Add Todo with given text
      </ListItem>
      <ListItem>
        <Code>TOGGLE_TODO</Code>: Toggle the done state of a given todo id
      </ListItem>
      <ListItem>
        <Code>REMOVE_TODO</Code>: Remove the todo from the list
      </ListItem>
      <ListItem>
        <Code>UPDATE_TODO</Code>: Update the text of the given todo
      </ListItem>
      <ListItem>
        <Code>SET_FILTER</Code>: Set filter value
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Step 2: Think about shapes that describe each action" />
    <List>
      <ListItem>
        <Code>{'{ type: "SET_TODOS", todos: [] }'}</Code>
      </ListItem>
      <ListItem>
        <Code>{'{ type: "ADD_TODO", text: "some todo" }'}</Code>
      </ListItem>
      <ListItem>
        <Code>{'{ type: "TOGGLE_TODO", id: "1" }'}</Code>
      </ListItem>
      <ListItem>
        <Code>{'{ type: "REMOVE_TODO", id: "1" }'}</Code>
      </ListItem>
      <ListItem>
        <Code>{'{ type: "UPDATE_TODO", id: "1", text: "changed text" }'}</Code>
      </ListItem>
      <ListItem>
        <Code>{'{ type: "SET_FILTER", value: "ONLY_ACTIVE" }'}</Code>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Step 3: Handling actions in reducers" />
    <CodeBlock source={raw('../examples/todo-reducer.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Putting it together: useReducer" />
    <CodeBlock source={raw('../examples/use-todo-reducer.js')} />
    <Footer />
  </Slide>,

  ...reducerPatternExerciseSlides,

  <Slide>
    <Header text="But why?" />
    <Columns>
      <Column>
        <ColumnHead>Cons</ColumnHead>
        <List>
          <ListItem>More typing</ListItem>
          <ListItem>Possibility of typos with action types</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Pros</ColumnHead>
        <List>
          <ListItem>
            All state transitions are <b>explicit</b>.
          </ListItem>
          <ListItem>
            Immutable state allows easier undo/redo functionality
          </ListItem>
          <ListItem>
            Very easy to understand <b>what actions</b> the app can handle.
          </ListItem>
          <ListItem>
            <b>Logic is decoupled</b> from React and UI-Components
            <List>
              <ListItem>
                UI-Framework can be replaced at a later state without touching
                logic.
              </ListItem>
              <ListItem>
                Transferable experience from other frameworks (NGRX in Angular
                or Vuex in Vue.js)
              </ListItem>
              <ListItem>State-logic can be tested in isolation</ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Redux" />
    <List>
      <ListItem>
        Very popular state management library:{' '}
        <ALink href="https://redux.js.org/" target="_blank">
          Website
        </ALink>
      </ListItem>
      <ListItem>
        Models state as one global object with one global reducer
      </ListItem>
      <ListItem>
        Every key in the global object models a distinct state slice.
      </ListItem>
      <ListItem>
        Actions are sometimes explicitly modeled as <Code>actionCreators</Code>:
        Functions that return the action when called.
        <br />
        Dispatching actions then looks like this:{' '}
        <Code>dispatch(removeTodo(todo.id))</Code>
      </ListItem>
      <ListItem>
        Added features:{' '}
        <List>
          <ListItem>
            Async actions via middlewares (
            <ALink
              href="https://github.com/reduxjs/redux-thunk"
              target="_blank"
            >
              thunks
            </ALink>
            ,{' '}
            <ALink href="https://redux-saga.js.org/" target="_blank">
              sagas
            </ALink>
            )
          </ListItem>
          <ListItem>
            Debugging via browser extension that keeps track of all actions
          </ListItem>
          <ListItem>
            Builtin APIs to connect components to the Redux store through
            context
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Example for async actions with redux-thunk" />
    <CodeBlock source={raw('../examples/redux-thunk.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Adding features to a Redux app" />
    <List>
      <ListItem>
        <b>Think about all actions</b> that come with the new feature.
      </ListItem>
      <ListItem>
        If actions are modelled as actionCreators, <b>add action creators</b> at
        the correct place.
      </ListItem>
      <ListItem>
        <b>Write the sub-reducer.</b>
      </ListItem>
      <ListItem>
        <b>Add the sub-reducer</b> to the global store.
      </ListItem>
      <ListItem>
        <b>Connect the UI</b> to the store for state and dispatch.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
