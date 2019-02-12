import React from 'react';
import { Heading, Slide, Text } from 'spectacle';
import { Footer } from '../../__helpers/slides/Footer';
import { Header } from '../../__helpers/slides/Header';

export const introSlides = [
  function Hello1() {
    return (
      <Slide transition={['fade']}>
        <Header text="Hello" />
        <Heading size={6} textColor="tertiary" caps>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text size={6} textColor="secondary">
          Standard text
        </Text>
        <Footer />
      </Slide>
    );
  },
  function Hello2() {
    return (
      <Slide transition={['fade']}>
        <Header text="Hello" />
        <Heading size={6} textColor="tertiary" caps>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text size={6} textColor="secondary">
          Standard text
        </Text>
        <Footer />
      </Slide>
    );
  },
  function Hello3() {
    return (
      <Slide transition={['fade']}>
        <Header text="Hello" />
        <Heading size={6} textColor="tertiary" caps>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text size={6} textColor="secondary">
          Standard text
        </Text>
        <Footer />
      </Slide>
    );
  }
];
