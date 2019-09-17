import styled from '@emotion/styled/macro';
import { Heading as SpectacleHeading } from 'spectacle';

export const Heading = styled(SpectacleHeading)`
  && {
    font-family: 'Klavika', 'Helvetica', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif !important;
    margin-top: 1em;
    font-size: ${({ size = 1 }) => [2.6, 2, 1.8, 1.4, 1.2, 1][size - 1]}em;
  }
`;
