import React from 'react';
import styled from 'react-emotion';
import { ReactComponent as Logo } from './esveo-logo.svg';

export function Footer({ text }) {
  return (
    <FooterContainer>
      <Img />
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

const Img = styled(Logo)`
  height: 20px;
  path {
    fill: black;
  }
`;
