import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from './Footer';
import { Header } from './Header';
import { Heading } from './Heading';

export const getTOCSlide = () => (
  <Slide>
    <Header text="Agenda" />
    <Heading>TODO</Heading>
    <Footer />
  </Slide>
);
