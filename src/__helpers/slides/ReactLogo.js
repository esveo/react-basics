import { keyframes } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { ReactComponent as Logo } from './react-logo.svg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const ReactLogo = styled(Logo)`
  animation: ${rotate} 20s linear infinite;
`;
