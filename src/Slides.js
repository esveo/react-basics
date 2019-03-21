import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import { allSlides } from './sections/allSlides';
import { Logo } from './__helpers/slides/Logo';
import { ReactLogo } from './__helpers/slides/ReactLogo';
import { theme } from './__helpers/slides/theme';

export function Slides() {
  return (
    <Deck
      transition={['fade']}
      transitionDuration={200}
      progress="none"
      theme={theme}
      showFullscreenControl={false}
    >
      <Slide bgColor="secondary">
        <ReactLogo style={{ height: 100 }} />
        <Heading size={1} fit textColor="primary">
          React Basics
        </Heading>
        <Text margin="10px 0 0" textColor="primary" bold>
          by <Logo />
        </Text>
      </Slide>
      {allSlides.map((e, i) => React.cloneElement(e, { key: i }))}
    </Deck>
  );
}
