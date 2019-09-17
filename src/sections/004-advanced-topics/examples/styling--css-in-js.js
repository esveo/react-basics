export function Form() {
  return (
    <Error
      css={{
        fontSize: '12px',
        ':hover': {
          fontSize: '14px'
        }
      }}
    >
      <Form />
    </Error>
  );
}

export const Error = styled.div`
  color: ${theme.colors.blue};
  &:hover {
    color: ${theme.colors.purple};
  }
`;
