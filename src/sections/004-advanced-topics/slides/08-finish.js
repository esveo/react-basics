import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
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
    </List>
    <Footer />
  </Slide>
];
