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
      <b>Step 2:</b> Add links.
    </Text>
    <CodeBlock source={raw('../examples/react-router--links.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Introduction to react-router" />
    <Text>
      <b>Step 3a:</b> Extract state or methods from router with custom hooks
    </Text>
    <CodeBlock source={raw('../examples/react-router--hooks.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Introduction to react-router" />
    <Text>
      <b>Step 3b:</b> Use <Code>Switch</Code> and <Code>Route</Code> to render
      the first matching component.
    </Text>
    <CodeBlock source={raw('../examples/react-router--routes.js')} />
    <Footer />
  </Slide>,

  ...routingExerciseSlides,

  <Slide>
    <Header text="Best practices" />
    <List>
      <ListItem>
        Only very few components should have knowledge about the routing of the
        app.
      </ListItem>
      <ListItem>Extract necessary data once and pass around as props.</ListItem>
      <ListItem>
        Don't put routing information into React state, because{' '}
        <b>duplicated state needs to be synced</b> which is very error prone.
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
