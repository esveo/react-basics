import styled from '@emotion/styled/macro';

export const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  flex: 1 1 0;
  padding: 0 0.5em;
`;

export const ColumnHead = styled.h1`
  border-bottom: 0.1em solid rgb(63, 167, 254);
  font-size: 1.3em;
  padding-bottom: 0.3em;
`;
