import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { Heading } from '../../../__helpers/slides/Heading';

export const fromStaticJSXTOComponentsSlides = [
  <Slide>
    <Header text={`Meeting React ${dash} Pure React`} />
    <Heading>
      data <FontAwesomeIcon icon={faLongArrowAltRight} /> UI
    </Heading>
    <Footer />
  </Slide>
];
