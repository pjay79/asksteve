import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  const mockFn = jest.fn();
  const mockProps = {
    navigation: { navigate: mockFn },
  };

  test('Renders correctly', () => {
    const tree = render(<LoadingScreen {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
