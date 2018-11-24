import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import PasswordScreen from '../PasswordScreen';

describe('PasswordScreen', () => {
  const mockFn = jest.fn();
  const mockProps = {
    navigation: { navigate: mockFn },
  };

  test('Renders correctly', () => {
    const tree = render(<PasswordScreen {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
