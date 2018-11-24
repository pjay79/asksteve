import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import ResultsScreen from '../ResultsScreen';

describe('ResultsScreen', () => {
  const mockFn = jest.fn();
  const mockProps = {
    navigation: { navigate: mockFn },
  };

  test('Renders correctly', () => {
    const tree = render(<ResultsScreen {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
