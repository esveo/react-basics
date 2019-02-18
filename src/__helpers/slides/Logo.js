import styled from '@emotion/styled/macro';
import React from 'react';
import { ReactComponent as SVGLogo } from './esveo-logo.svg';

export const LogoSVG = styled(SVGLogo)`
  height: 24px;
  path {
    fill: rgb(63, 167, 254);
  }
`;

export const Logo = p => (
  <a href="https://www.esveo.com" {...p}>
    <LogoSVG />
  </a>
);
