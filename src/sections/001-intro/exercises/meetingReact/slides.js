import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';

export const meetingReactExerciseSlides = [
  <Slide>
    <Header text="Meeting React" tag="Exercise" />
    <List>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
