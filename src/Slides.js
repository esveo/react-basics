import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import { allSlides } from './sections/allSlides';
import { Logo } from './__helpers/slides/Logo';
import { Planets } from './__helpers/slides/Planets';
import { ReactLogo } from './__helpers/slides/ReactLogo';
import { SlideNumberProvider } from './__helpers/slides/SlideNumber';
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
        <Planets />
        <ReactLogo style={{ height: 100 }} />
        <Heading size={1} fit textColor="primary">
          React Basics
        </Heading>
        <Text margin="10px 0 0" textColor="primary" bold>
          by <Logo />
        </Text>
      </Slide>
      {allSlides.map(attachKeyAndSlide)}
    </Deck>
  );
}

function attachKeyAndSlide(element, index) {
  return React.cloneElement(element, {
    key: index,
    children: (
      <SlideNumberProvider value={index + 1}>
        {element.props.children}
      </SlideNumberProvider>
    )
  });
}
