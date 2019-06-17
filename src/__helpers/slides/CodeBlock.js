import styled from '@emotion/styled/macro';
import React from 'react';
import { CodePane } from 'spectacle';

export const CodeBlock = styled(p => (
  <CodePane lang="jsx" {...p} theme="external" />
))`
  && {
    font-size: 0.75em;
    max-height: 80vh;
    margin-top: ${p => p.m || '2em'};
    overflow: auto;
  }

  .prism-code {
    border-radius: 0.5em;
  }
`;
