import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { usingBuildChainExerciseSlides } from '../exercises/03-usingBuildChain/slides';

export const usingBuildChainSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="JSX" />
    <Text left>JavaScript XML or JavaScript Syntax Extension</Text>
    <List>
      <ListItem>One additional compilation step in the build chain.</ListItem>
      <ListItem>
        Allows developers to write HTML-like syntax and convert it to
        createElement calls.
      </ListItem>
      <ListItem>
        Each JSX tree is compiled into on nested function call.
      </ListItem>
      <ListItem>
        No statements are allowed inside of JSX, only expressions. (no if,
        while, for etc.)
      </ListItem>
      <ListItem>Various small differences to HTML</ListItem>
      <ListItem>React needs to be imported!</ListItem>
      <ListItem>
        <b>It's still only JavaScript</b> (with nicer syntax), so all JavaScript
        constructs are allowed
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JSX`} />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/usingBuildChainJSXCompilation.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`map, filter & sort`} tag="JS recap" />
    <Text left>
      Remember: Your React app is a large data transformation. Data is often
      represented in arrays so you need to be able to use methods on arrays to
      retrieve your desired data.
    </Text>
    <List>
      <ListItem>
        <b>
          <Code>map</Code>:
        </b>{' '}
        Transform each item in a list into another item.
      </ListItem>
      <ListItem>
        <b>
          <Code>filter</Code>:
        </b>{' '}
        Only keep items in the list that match a specific condition.
      </ListItem>
      <ListItem>
        <b>
          <Code>sort</Code>:
        </b>{' '}
        Sort items by providing a function that compares two elements.
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`map, filter & sort`} tag="JS recap" />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/meetingReactArrayFunctions.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`JSX ${dash} inline expressions`} />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/usingBuildChainJSXExpressions.js')}
    />
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`JSX ${dash} inline expressions`} />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/usingBuildChainJSXExpressions2.js')}
    />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`JSX ${dash} differences to HTML`} />
    <CodeBlock
      lang="jsx"
      source={raw('../examples/usingBuildChainJSXvsHTML.js')}
    />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Styles as a module" />
    <List>
      <ListItem>Styles are treated as modules nowadays too.</ListItem>
      <ListItem>
        Easiest form is to import the file without importing variables:
      </ListItem>
      <ListItem>
        <Code>import './App.css'</Code>
      </ListItem>
      <ListItem>
        This is plain global CSS so you can use ids, classes, pseudo selectors
        or animations.
      </ListItem>
      <ListItem>More options for styling in React later.</ListItem>
    </List>
    <Footer />
  </Slide>,

  ...usingBuildChainExerciseSlides
];
