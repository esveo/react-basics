import styled from '@emotion/styled/macro';
import React from 'react';
import { Deck, Slide } from 'spectacle';
import { preambelSlides } from './sections/001-intro/slides/01-preambelSlides';
import { dash } from './__helpers/dash';
import { Footer } from './__helpers/slides/Footer';
import { Header } from './__helpers/slides/Header';
import { Heading } from './__helpers/slides/Heading';
import { ALink } from './__helpers/slides/Link';
import { List, ListItem } from './__helpers/slides/List';
import { Logo } from './__helpers/slides/Logo';
import { ObjectFitContain } from './__helpers/slides/ObjectFitContain';
import { Planets } from './__helpers/slides/Planets';
import { ReactLogo } from './__helpers/slides/ReactLogo';
import { SlideNumberProvider } from './__helpers/slides/SlideNumber';
import { Text } from './__helpers/slides/Text';
import { theme } from './__helpers/slides/theme';
import { getTOCSlide } from './__helpers/slides/TOCSlide';

export function PreparationSlides() {
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
          <Text margin="1em 0 0" textColor="#ddd">
            03.12.2019 - 05.12.2019
          </Text>
        </Foreground>
      </Slide>
      {[
        preambelSlides[2],
        preambelSlides[3],
        preambelSlides[9],
        <Slide>
          <Header text="Key facts" />
          <List>
            <ListItem>
              <b>When?</b> 03. - 05.12.2019, 9:00 - 17:00
            </ListItem>
            <ListItem>
              <b>Where?</b>{' '}
              <ALink href="https://www.queo.de/de/kontakt.html" target="_blank">
                queo office in Dresden
              </ALink>{' '}
              (
              <ALink
                href="https://www.google.com/maps/place/queo+GmbH/@51.040496,13.7025023,17z/data=!3m1!4b1!4m5!3m4!1s0x4709c57f54beb8e9:0xa464c46f22d4471e!8m2!3d51.040496!4d13.704691"
                target="_blank"
              >
                Maps
              </ALink>
              ) {dash} 4th floor, ask for "React Training" at the reception
            </ListItem>
            <ListItem>
              <b>What to bring?</b> Laptop, Charger
            </ListItem>
          </List>
          <Footer />
        </Slide>,
        getTOCSlide({ noLinks: true })
      ].map(attachKeyAndSlide)}
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
