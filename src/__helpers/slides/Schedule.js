import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from './Footer';
import { Header } from './Header';
import { List, ListItem } from './List';

export const scheduleSlide = (
  <Slide>
    <Header>Schedule</Header>
    <List>
      <ListItem>
        <b>9:00:</b> Start
      </ListItem>
      <ListItem>
        <b>10:30:</b> Coffee break
      </ListItem>
      <ListItem>
        <b>12:15:</b> Lunch
      </ListItem>
      <ListItem>
        <b>15:00:</b> Coffee break
      </ListItem>
    </List>
    <Footer />
  </Slide>
);
