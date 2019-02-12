import React from 'react';
import { Heading, Slide } from 'spectacle';
import { Footer } from './Footer';
import { Header } from './Header';

export const getTOCSlide = () => (
  <Slide>
    <Header text="Agenda" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
);
