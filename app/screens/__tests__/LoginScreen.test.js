import React from 'react';
import { mount } from 'enzyme';
import * as LoginScreen from '../LoginScreen';

jest.mock('../LoginScreen', () => () => null);

describe('LoginScreen', () => {
  it('Renders correctly', () => {
    const mockProps = {
      navigation: { navigate: jest.fn() },
    };
    const wrapper = mount(<LoginScreen {...mockProps} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });
});
