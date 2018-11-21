import React from 'react';
import { shallow } from 'enzyme';
import * as LoginScreen from '../LoginScreen';

describe('LoginScreen', () => {
  it('Renders correctly', () => {
    const mockProps = {
      navigation: { navigate: jest.fn() },
    };
    const wrapper = shallow(<LoginScreen {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
