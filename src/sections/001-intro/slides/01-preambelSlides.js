import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { initialSetupExerciseSlides } from '../exercises/01-initialSetup/slides';

export const preambelSlides = [
  <Slide>
    <Header text="About us" />
    <Columns>
      <Column>
        <ColumnHead>
          Digital
          <br />
          Solutions
        </ColumnHead>
        <List>
          <ListItem>
            planning, controlling, reporting, information management and
            processes
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>
          Information
          <br />
          Security
        </ColumnHead>
        <List>
          <ListItem>Test</ListItem>
          <ListItem>Test2</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>
          Software
          <br />
          Technology
        </ColumnHead>
        <List>
          <ListItem>Test</ListItem>
          <ListItem>Test2</ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Who are you?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="What do we want to achieve?" />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  getTOCSlide(),

  <Slide>
    <Header text={`State of JS ${dash} The early days`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Frameworks`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Modules`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Build Chain`} />
    <Heading caps>TODO</Heading>
    <Footer />
  </Slide>,

  ...initialSetupExerciseSlides
];
