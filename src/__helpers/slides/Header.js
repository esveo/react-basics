import styled from '@emotion/styled/macro';
import React from 'react';
import { Heading } from './Heading';

export function Header({ text, tag }) {
  return (
    <HeaderContainer>
      <HeaderText textColor="tertiary" textAlign="left">
        {text}
      </HeaderText>
      {tag && (
        <TagContainer>
          <Tag>{tag}</Tag>
        </TagContainer>
      )}
    </HeaderContainer>
  );
}

export const Tag = styled.div`
  position: relative;
  z-index: 1;
`;

const HeaderContainer = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 3em;
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 0 0.75em;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  white-space: nowrap;
`;

const HeaderText = styled(Heading)`
  && {
    font-size: 1.4em;
  }
`;

const TagContainer = styled.div`
  background: rgb(63, 167, 254);
  color: white;
  padding: 1em;
  position: relative;
  right: -0.75em;

  :before {
    background: rgb(63, 167, 254);
    content: '';
    display: block;
    height: 200%;
    left: -1.5em;
    position: absolute;
    top: 0;
    transform-origin: 0 0;
    transform: rotate(-25deg);
    width: 5em;
  }
`;
