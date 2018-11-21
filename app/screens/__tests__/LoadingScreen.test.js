import React from 'react';
import { shallow } from 'enzyme';
import * as LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  it('Renders correctly', () => {
    const mockProps = {
      navigation: { navigate: jest.fn() },
    };
    const wrapper = shallow(<LoadingScreen {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
