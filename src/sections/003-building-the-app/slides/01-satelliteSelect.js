import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { satelliteSelectExerciseSlides } from '../exercises/01-satelliteSelect/slides';
import { App } from '../exercises/06-externalPackages/src/App';

export const satelliteSelectSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Building Satellite Control" />
    <div style={{ height: '20em', textAlign: 'left' }}>
      <App />
    </div>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Rendering lists ${dash} keys`} />
    <Text>
      When rendering a list, we need to help React to identify instances across
      rerenders.
    </Text>
    <Text>
      When reversing a list, React should not change the contents of the list
      items, but move the DOM nodes to their new position.
    </Text>
    <CodeBlock
      lang="jsx"
      source={`[1, 2, 3].map(n => (
  <h1 key={n}>
    Number: {n}
  </h1>
)`}
    />
    <Footer />
  </Slide>,

  <Slide>
    <Header
      text={`Rendering lists ${dash} anonymous functions as event handlers`}
    />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>
            We need the local variable from the <Code>map</Code> call to
            identify the clicked list item.
          </ListItem>
          <ListItem>
            We can use a local function in the map call to access the variable
            from the scope.
          </ListItem>
          <ListItem>
            An inline arrow function with an implicit return can make this a lot
            terser.
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <CodeBlock
          m="0"
          lang="jsx"
          source={`[1, 2, 3].map(n => {
  function log() {
    console.log(n);
  }
  return (
    <h1 key={n} onClick={() => console.log(n)}>
      Number: {n}
    </h1>
  )
})`}
        />
        <CodeBlock
          m="1em"
          lang="jsx"
          source={`[1, 2, 3].map(n => (
  <h1 key={n} onClick={() => console.log(n)}>
    Number: {n}
  </h1>
))`}
        />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Conditional rendering`} />
    <CodeBlock
      m="0"
      lang="jsx"
      source={raw('../examples/conditionalRendering.js')}
    />
    <Footer />
  </Slide>,

  ...satelliteSelectExerciseSlides
];
