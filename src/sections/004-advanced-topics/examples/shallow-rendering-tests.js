import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('Contains all relevant fields', () => {
    expect(
      shallow(<LoginForm />)
        .exists(<form className="login" />)
    ).toBe(true);
  });
});
