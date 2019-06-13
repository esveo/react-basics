import styled from '@emotion/styled/macro';
import React from 'react';
import { Deck, Slide } from 'spectacle';
import { allSlides } from './sections/allSlides';
import { Heading } from './__helpers/slides/Heading';
import { Logo } from './__helpers/slides/Logo';
import { ObjectFitContain } from './__helpers/slides/ObjectFitContain';
import { Planets } from './__helpers/slides/Planets';
import { ReactLogo } from './__helpers/slides/ReactLogo';
import { SlideNumberProvider } from './__helpers/slides/SlideNumber';
import { Text } from './__helpers/slides/Text';
import { theme } from './__helpers/slides/theme';

export function Slides() {
  return (
    <Deck
      transition={['fade']}
      transitionDuration={200}
      progress="none"
      theme={theme}
      showFullscreenControl={false}
      controls={false}
    >
      <Slide bgColor="secondary">
        <Planets />
        <Foreground>
          <ReactLogo style={{ height: 100 }} />
          <Heading textColor="primary">React Basics</Heading>
          <Text margin="1em 0 0" textColor="primary" bold>
            by <Logo />
          </Text>
        </Foreground>
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
        <SlideBackground>
          <ObjectFitContain>
            {props => (
              <SlideContentWrapper {...props}>
                <SlideContent>{element.props.children}</SlideContent>
              </SlideContentWrapper>
            )}
          </ObjectFitContain>
        </SlideBackground>
      </SlideNumberProvider>
    )
  });
}

const SlideBackground = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;

  &&& ${Heading} {
    font-size: 4em;
    margin: 0;
  }
`;

const SlideContentWrapper = styled.div`
  position: relative;
  font-size: ${p => p.style.width * 0.019}px;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 4em;
  max-width: 100%;
  max-height: 100%;
`;

const SlideContent = styled.div`
  width: 100%;
`;
