import styled from '@emotion/styled/macro';

export const Columns = styled.div`
  display: flex;
  align-items: ${p => p.align || 'flex-start'};
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  flex: 1 1 0;
  flex-grow: ${p => p.weight || 1};
  padding: 0 ${p => (p.p === undefined ? 1 : p.p)}em;
`;

export const ColumnHead = styled.h1`
  border-bottom: 0.1em solid rgb(63, 167, 254);
  font-size: 1.2em;
  padding-bottom: 0.3em;
`;
