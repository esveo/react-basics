import React from 'react';
import styled from 'react-emotion';
import { CodePane } from 'spectacle';

export const CodeBlock = styled(p => <CodePane {...p} theme="external" />)`
  && {
    font-size: 0.84em;
    max-height: 80vh;
    overflow: auto;
  }

  .prism-code {
    border-radius: 10px;
  }
`;
