import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { allSlides } from './sections/allSlides';
import { Logo } from './__helpers/slides/Logo';
import { ReactLogo } from './__helpers/slides/ReactLogo';

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
        <ReactLogo style={{ height: 100 }} />
        <Heading size={1} fit textColor="tertiary">
          React Basics
        </Heading>
        <Text margin="10px 0 0" textColor="secondary" bold>
          by <Logo />
        </Text>
      </Slide>
      {allSlides.map((Component, index) => (
        <Component key={index} />
      ))}
    </Deck>
  );
}
