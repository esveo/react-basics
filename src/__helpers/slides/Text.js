import styled from '@emotion/styled/macro';
import { Text as SpectacleText } from 'spectacle';

export const Text = styled(SpectacleText)`
  && {
    font-family: 'Klavika';
    margin-bottom: 1em;
    font-size: 1em;
    text-align: ${p => (p.left ? 'left' : 'center')};
  }
`;
