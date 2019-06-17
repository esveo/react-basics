import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { fromStaticJSXToComponentsExerciseSlides } from '../exercises/01-fromStaticJSXToComponents/slides';

export const fromStaticJSXTOComponentsSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`Creating dynamic content with JSX factories`} />
    <List>
      <ListItem>Until now, we only had static descriptions of the UI.</ListItem>
      <ListItem>
        Since ReactElements are just JavaScript objects, we can return them from
        functions with arguments.
      </ListItem>
    </List>
    <CodeBlock lang="jsx" source={raw('../examples/jsxFactories.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Nested JSX factories`} />
    <CodeBlock lang="jsx" source={raw('../examples/nestedJsxFactories.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Create reusable React-Components`} />
    <Text left>
      Because this is such a powerfull building block, React incorporates this
      as React-Components:
    </Text>
    <List>
      <ListItem>
        A React component is a function that defines one argument:{' '}
        <Code>props</Code>
      </ListItem>
      <ListItem>This function must return a ReactNode.</ListItem>
      <ListItem>Should only be called from React internals.</ListItem>
      <ListItem>
        To create an instance of a React component, use createElement (or JSX).
      </ListItem>
      <ListItem>Always starts with an uppercase letter.</ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Reusable react-Components`} />
    <CodeBlock lang="jsx" source={raw('../examples/firstComponents.js')} />
    <Footer />
  </Slide>,

  ...fromStaticJSXToComponentsExerciseSlides
];
