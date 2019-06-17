import React from 'react';
import { Slide } from 'spectacle';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { dataFlowExerciseSlides } from '../exercises/02-dataFlow/slides';
import { ReactComponent as ComponentTreeSVG } from './component-tree.svg';
import { ReactComponent as DataFlowSVG } from './data-flow.svg';

export const dataFlowSlides = [
  getTOCSlide(),
  <Slide>
    <Header text={`Visualizing the component Tree`} />
    <Columns align="center">
      <Column weight={1}>
        <List>
          <ListItem>Hierarchy of components</ListItem>
          <ListItem>
            Each component may decide to render other components.
          </ListItem>
          <ListItem>
            Which children are rendered is an implementation detail.
          </ListItem>
        </List>
      </Column>
      <Column weight={2} p={0}>
        <ComponentTreeSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Top-Down data flow`} />
    <Columns align="center">
      <Column weight={1}>
        <List>
          <ListItem>Data flows top to bottom</ListItem>
          <ListItem>Always passed through props.</ListItem>
          <ListItem>
            When a decendant needs some information, it has to be passed through
            the parents.
          </ListItem>
          <ListItem>
            To change data, events or callbacks are called from the
            UI-component.
          </ListItem>
          <ListItem>
            After events, React rerenders the tree and updates the UI where
            necessary.
          </ListItem>
        </List>
      </Column>
      <Column weight={2} p={0}>
        <DataFlowSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  ...dataFlowExerciseSlides
];
