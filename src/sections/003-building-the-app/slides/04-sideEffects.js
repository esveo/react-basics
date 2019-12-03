import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { sideEffectsExerciseSlides } from '../exercises/04-sideEffects/slides';

export const sideEffectsSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Reminder: Render is a pure function" />
    <Text left>
      Things that are <b>not allowed</b> to do directly in the render function:
    </Text>
    <List>
      <ListItem>Mutate state variables</ListItem>
      <ListItem>Set state</ListItem>
      <ListItem>
        Introduce randomnes (e.g. by calling <Code>Math.random()</Code>)
      </ListItem>
      <ListItem>
        Use mutable global variables (like <Code>location.hash</Code>)
      </ListItem>
      <ListItem>Schedule timeouts or intervals</ListItem>
      <ListItem>Communicate with the backend</ListItem>
    </List>
    <Text left>
      The reason for most of these is, that we are <b>bypassing react</b>. The
      library cannot know when a global variable changes or detect mutations on
      objects.
      <br />
      We beed to be <b>explicit</b> and tell react when we want to synchronize
      the render result with some sort of external data or value.
    </Text>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Use case: listening to changes to global mutable state" />
    <Text>
      <b>DON'T</b>
    </Text>
    <CodeBlock source={raw('../examples/listeningToLocationHashBad.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Use case: listening to changes to global mutable state" />
    <Text>
      <b>DO</b>
    </Text>
    <CodeBlock source={raw('../examples/listeningToLocationHashGood.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`The next hook ${dash} useEffect`} tag="API" />
    <CodeBlock
      lang="jsx"
      source={'useEffect(effectFunction, [dependencies])'}
    />
    <Heading size={6} textAlign="left">
      Calls the effect function to synchronize an external resource with the
      react rendering imperativley or the other way round.
    </Heading>
    <List>
      <ListItem>
        <Code>effectFunction</Code>: Will be called whenever a depencency
        changes. Can return a cleanup function.
      </ListItem>
      <ListItem>
        <Code>dependencies</Code>: To prevent call of the effectFunction on
        every render, an array of values can be supplied. The effect function
        will only be called when at least one of the dependency values changes.
      </ListItem>
      <ListItem>
        More info in this{' '}
        <ALink
          href="https://overreacted.io/a-complete-guide-to-useeffect/"
          target="_new"
        >
          blog post
        </ALink>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} examples`} />
    <CodeBlock lang="jsx" source={raw('../examples/useEffectExamples.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} how to use dependencies`} />
    <Text left>Always follow these rules for effect dependencies:</Text>
    <List>
      <ListItem>
        Only add dependencies, when running on every render would lead to errors
        or performance problems.
        <br />
        For example adding and removing an event listener on every render is
        totally fine.
      </ListItem>
      <ListItem>
        When you really need dependencies:{' '}
        <b>
          Add all variables that are defined in props or in the component body
        </b>
      </ListItem>
    </List>
    <Text left>
      <b>Not complying to the second rule will lead to nasty bugs.</b>
    </Text>
    <Text left>
      Listen to the eslint rule that warns you about missing dependencies.
    </Text>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Text>Stale Closures</Text>
    <CodeBlock lang="jsx" source={raw('../examples/staleClosure.js')} />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Text>Referential equality of functions</Text>
    <CodeBlock
      lang="jsx"
      source={raw('../examples/referentialEqualityWithFunctions1.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Text>Referential equality of functions</Text>
    <CodeBlock
      lang="jsx"
      source={raw('../examples/referentialEqualityWithFunctions2.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Text>Referential equality of functions</Text>
    <CodeBlock
      lang="jsx"
      source={raw('../examples/referentialEqualityWithFunctions3.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`useEffect ${dash} pitfalls`} />
    <Text>Referential equality of functions</Text>
    <CodeBlock
      lang="jsx"
      source={raw('../examples/referentialEqualityWithFunctions4.js')}
    />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`The next hook ${dash} useCallback`} tag="API" />
    <CodeBlock
      lang="jsx"
      source={'useCallback(callbackFunction, [dependencies])'}
    />
    <Heading size={6} textAlign="left">
      Creates an instance of the given callback that only changes its identity
      when a dependency changes.
    </Heading>
    <List>
      <ListItem>
        <Code>callbackFunction</Code>: Function that defines the behavior of the
        resulting function
      </ListItem>
      <ListItem>
        <Code>dependencies</Code>: To prevent recreation of the callback on
        every render, an array of values can be supplied. The callback function
        will only be recreated when at least one of the dependency values
        changes.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  ...sideEffectsExerciseSlides
];
