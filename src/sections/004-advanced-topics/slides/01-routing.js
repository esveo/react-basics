import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { routingExerciseSlides } from '../exercises/01-routing/slides';

export const routingSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Benefits of routing" />
    <List>
      <ListItem>Routing allows you to store state in the URI</ListItem>
      <ListItem>URIs can be bookmarked, saved and shared</ListItem>
      <ListItem>This way, state can be bookmarked, saved and shared</ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Clientside vs. serverside routing" />
    <Columns>
      <Column>
        <ColumnHead>Server side routing</ColumnHead>
        <List>
          <ListItem>
            Client sends a request with a specific path to the server
          </ListItem>
          <ListItem>
            Server gathers all relevant data and generates HTML page
          </ListItem>
          <ListItem>Each click on a link requires a page reload</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Client side routing</ColumnHead>
        <List>
          <ListItem>
            Each request to the server returns the same application (=Single
            Page Application)
          </ListItem>
          <ListItem>
            The application reads the current path from the url and loads the
            app in the specified state
          </ListItem>
          <ListItem>
            <b>Navigations between pages are instant</b>
          </ListItem>
          <ListItem>
            Routes are able to refer to only a sub part of the page
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Libraries" />
    <Columns>
      <Column>
        <ColumnHead>Reach Router</ColumnHead>
        <List>
          <ListItem>Simple API for simple use cases</ListItem>
          <ListItem>
            Focus on accessibility (focus management for route transitions)
          </ListItem>
          <ListItem>
            Developed by one of the core maintainers of React Router
          </ListItem>
          <ListItem>
            <ALink target="_new" href="https://reach.tech/router">
              Website
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>React Router</ColumnHead>
        <List>
          <ListItem>Larger user base</ListItem>
          <ListItem>More complex but flexible API</ListItem>
          <ListItem>Perfect for larger long time projects</ListItem>
          <ListItem>
            <b>Despite the name, 3rd party library</b>
          </ListItem>
          <ListItem>
            Will support Reach Router benefits in the next major version
          </ListItem>
          <ListItem>
            <ALink
              target="_new"
              href="https://reacttraining.com/react-router/web/guides/quick-start"
            >
              Website
            </ALink>
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Introduction to react-router" />
    <Text>
      <b>Step 1:</b> Add the router at the top of your application.
      <br />
      This connects to the browser URL and extracts the correct route
    </Text>
    <CodeBlock source={raw('../examples/react-router--router.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Introduction to react-router" />
    <Text>
      <b>Step 2:</b> Define your routes.
    </Text>
    <CodeBlock source={raw('../examples/react-router--routes.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Introduction to react-router" />
    <Text>
      <b>Step 3:</b> Add links.
    </Text>
    <CodeBlock source={raw('../examples/react-router--links.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Route" tag="API" />
    <CodeBlock
      lang="jsx"
      source={
        '<Route exact={boolean} path={string} render={(routerProps) => ReactNode} />'
      }
    />
    <Heading size={6} textAlign="left">
      Can be placed anywhere in your application and will render its content
      when the given path matches.
    </Heading>
    <List>
      <ListItem>
        <Code>exact</Code>: When false, routes that start with this string will
        also trigger this route. (e.g. <Code>/projects/1</Code> would trigger
        the path
        <Code>/projects</Code>)
      </ListItem>
      <ListItem>
        <Code>path</Code>: Path that will be used to match
      </ListItem>
      <ListItem>
        <Code>render</Code>: <b>RenderProp</b> {dash} will be called when the
        route matches.
      </ListItem>
      <ListItem>
        More info and detailed API can be found{' '}
        <ALink
          href="https://reacttraining.com/react-router/web/api/Route"
          target="_new"
        >
          here
        </ALink>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="RenderProp" />
    <Text>
      Special prop: <b>Function</b> that will be called by the target component
      (with or without arguments) that <b>returns a ReactNode</b>
      <br />
      Usefull when you want to pass data from your component to the children of
      your component.
    </Text>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="RenderProp" />
    <CodeBlock source={raw('../examples/render-prop.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`React Router ${dash} render vs children`} />
    <Text>
      The <Code>render</Code> function will only be called, when the route
      matches.
    </Text>
    <Text>
      Sometimes you need to always render and retrieve information about wether
      the route matches or not.
    </Text>
    <Text>
      For this, the <Code>children</Code> prop can be used.
    </Text>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Children Prop" />
    <CodeBlock source={raw('../examples/children-prop.js')} />
    <Footer />
  </Slide>,

  ...routingExerciseSlides
];
