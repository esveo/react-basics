import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { externalPackagesExerciseSlides } from '../exercises/06-externalPackages/slides';

export const externalPackagesSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="npm" />
    <List>
      <ListItem>"The package manager for JavaScript"</ListItem>
      <ListItem>
        Largest package registry in the world with more than 1.000.000 packages
      </ListItem>
      <ListItem>
        Contains libraries or frameworks for frontend and backend JavaScript
        development
      </ListItem>
      <ListItem>
        You already used this, when using <Code>create-react-app</Code> and{' '}
        <Code>prop-types</Code>
      </ListItem>
      <ListItem>
        <b>Be careful when installing packages!</b>
        <List>
          <ListItem>Check download stats (the more, the better)</ListItem>
          <ListItem>
            Check last change in GitHub repository (the later, the better)
          </ListItem>
          <ListItem>Check the owner of the package and the repository</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Install package by typing <Code>{'npm i <packagename>'}</Code>
      </ListItem>
    </List>
    <Footer />
  </Slide>,
  ...externalPackagesExerciseSlides
];
