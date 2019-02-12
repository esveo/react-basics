import React from 'react';
import styled from 'react-emotion';
import { Logo } from './Logo';

export function Footer() {
  return (
    <FooterContainer>
      <Logo />
    </FooterContainer>
  );
}

const FooterContainer = styled('div')`
  align-items: center;
  color: secondary;
  display: flex;
  font-size: 1.2em;
  height: 2em;
  left: 0;
  margin: 0;
  padding: 0 0.75em;
  position: fixed;
  right: 0;
  justify-content: flex-end;
  bottom: 0;
  white-space: nowrap;
`;
