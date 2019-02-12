import React from 'react';

import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { allSlides } from './sections/allSlides';

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'rgb(17, 17, 17)',
    tertiary: 'rgb(63, 167, 254)'
  },
  {
    primary: 'Helvetica',
    textSize: '0.5em'
  }
);

export function Slides() {
  return (
    <Deck
      transition={['slide']}
      transitionDuration={500}
      progress="bar"
      theme={theme}
      showFullscreenControl={false}
    >
      <Slide bgColor="primary">
        <Heading size={1} fit textColor="tertiary">
          React Basics Schulung
        </Heading>
        <Text margin="10px 0 0" textColor="secondary" bold>
          by esveo
        </Text>
      </Slide>
      {allSlides.map((Component, index) => (
        <Component key={index} />
      ))}
    </Deck>
  );
}
