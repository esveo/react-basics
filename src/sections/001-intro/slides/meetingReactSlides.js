import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import raw from 'raw.macro';
import React from 'react';
import { Heading, Slide } from 'spectacle';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';

export const meetingReactSlides = [
  <Slide>
    <Header text="Meeting React – Pure React" />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI
    </Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Meeting React – Pure React" />
    <Heading fit>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI-Description
    </Heading>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Meeting React – Pure React" />
    <CodeBlock
      lang="jsx"
      source={raw('../../../__helpers/slides/CodeBlock.js')}
    />
    <Footer />
  </Slide>
];
