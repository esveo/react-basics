import styled from '@emotion/styled/macro';
import { Text as SpectacleText } from 'spectacle';

export const Text = styled(SpectacleText)`
  && {
    font-family: 'Klavika', 'Helvetica', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif !important;
    margin-bottom: 1em;
    font-size: ${p => p.size || 1}em;
    text-align: ${p => (p.left ? 'left' : 'center')};
  }
`;
