import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';

export const finishSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Resources" />
    <List>
      <ListItem>
        React Docs:{' '}
        <ALink target="_blank" href="https://reactjs.org/">
          https://reactjs.org/
        </ALink>
      </ListItem>
      <ListItem>
        Slack Community for questions & discussions: Reactiflux{' '}
        <ALink target="_blank" href="https://www.reactiflux.com">
          https://www.reactiflux.com
        </ALink>
      </ListItem>
      <ListItem>
        Redux Docs:{' '}
        <ALink target="_blank" href="https://redux.js.org">
          https://redux.js.org
        </ALink>
      </ListItem>
      <ListItem>
        React-Router Docs:{' '}
        <ALink
          target="_blank"
          href="https://reacttraining.com/react-router/web/guides/quick-start"
        >
          https://reacttraining.com/react-router/web/guides/quick-start
        </ALink>
      </ListItem>
      <ListItem>
        JS Meetup: <ALink href="http://dresdenjs.io/">DresdenJS</ALink>
      </ListItem>
      <ListItem>
        Reddit community:{' '}
        <ALink href="https://www.reddit.com/r/reactjs">ReactJS</ALink>
      </ListItem>
      <ListItem>
        Twitter:{' '}
        <ALink href="https://twitter.com/dan_abramov">Dan Abramov</ALink>
      </ListItem>
      <ListItem>
        For other questions:{' '}
        <ALink href="https://twitter.com/andrewgreenh">My Twitter</ALink>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Where to go from here?" />
    <List>
      <ListItem>
        <b>Start building an app</b>
      </ListItem>
      <ListItem>Switch to TypeScript</ListItem>
      <ListItem>
        Learn advanced patterns
        <List>
          <ListItem>Compound Components</ListItem>
          <ListItem>Render Props</ListItem>
          <ListItem>Higher Order Components</ListItem>
        </List>
      </ListItem>
      <ListItem>Take a look at GraphQL</ListItem>
      <ListItem>Learn SVG to visualise data with React</ListItem>
      <ListItem>Use React-Native to build mobile apps</ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Text>
      <ALink href="https://www.esveo.com/s/fb-rbt" target="_blank">
        www.esveo.com/s/fb-rbt
      </ALink>
    </Text>
  </Slide>
];
