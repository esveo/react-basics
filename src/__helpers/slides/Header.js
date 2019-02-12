import React from 'react';
import styled from 'react-emotion';
import { Heading } from 'spectacle';

export function Header({ text }) {
  return (
    <HeaderContainer>
      <HeaderText textColor="tertiary" textAlign="left">
        {text}
      </HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled('div')`
  align-items: center;
  color: secondary;
  display: flex;
  height: 2em;
  left: 0;
  margin: 0;
  padding: 0 0.75em;
  position: fixed;
  right: 0;
  text-align: left;
  top: 0;
  white-space: nowrap;
`;

const HeaderText = styled(Heading)`
  && {
    font-size: 1.2em;
  }
`;
