import styled from '@emotion/styled/macro';
import React from 'react';
import { CodePane } from 'spectacle';

export const CodeBlock = styled(p => <CodePane {...p} theme="external" />)`
  && {
    font-size: 0.84em;
    max-height: 80vh;
    margin-top: 2em;
    overflow: auto;
  }

  .prism-code {
    border-radius: 0.5em;
  }
`;
