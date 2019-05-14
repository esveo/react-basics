import styled from '@emotion/styled/macro';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from './Link';
import { Logo } from './Logo';
import { SlideNumber } from './SlideNumber';

export function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <FontAwesomeIcon size="sm" icon={faHome} />
      </Link>
      <SlideNumber>
        {number => <SlideNumberText>{number}</SlideNumberText>}
      </SlideNumber>
      <Logo />
    </FooterContainer>
  );
}

const SlideNumberText = styled('span')`
  font-size: 0.8em;
  font-variant-numeric: tabular-nums;
`;

const FooterContainer = styled('div')`
  align-items: center;
  bottom: 0;
  color: rgb(63, 167, 254);
  display: flex;
  height: 2em;
  justify-content: space-between;
  left: 0;
  margin: 0;
  padding: 0 0.75em;
  position: absolute;
  right: 0;

  ${Link} {
    font-size: 1.2em;
    flex: 1 1 0;
    text-align: left;
  }

  ${SlideNumberText} {
    flex: 1 1 0;
  }

  a {
    flex: 1 1 0;
    text-align: right;
  }
`;
