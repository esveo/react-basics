import styled from '@emotion/styled/macro';
import { Heading as SpectacleHeading } from 'spectacle';

export const Heading = styled(SpectacleHeading)`
  && {
    margin-top: 1em;
    font-size: ${({ size = 1 }) => [2.6, 2, 1.8, 1.4, 1.2, 1][size - 1]}em;
  }
`;
