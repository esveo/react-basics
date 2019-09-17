import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('Updates correctly', () => {
    const { getByTestId } = render(<LoginForm />);
    const nameInput = getByTestId('name');
    expect(nameInput.value).toBe('');

    fireEvent.change(nameInput, { target: { value: 'react' } });

    expect(nameInput.value).toBe('react');
  });
});
