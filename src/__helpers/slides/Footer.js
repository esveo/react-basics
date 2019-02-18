import styled from '@emotion/styled/macro';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from './Link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <FontAwesomeIcon size="sm" icon={faHome} />
      </Link>
      <Logo />
    </FooterContainer>
  );
}

const FooterContainer = styled('div')`
  align-items: center;
  bottom: 0;
  color: rgb(63, 167, 254);
  display: flex;
  font-size: 1.2em;
  height: 2em;
  justify-content: space-between;
  left: 0;
  margin: 0;
  padding: 0 0.75em;
  position: absolute;
  right: 0;
`;
