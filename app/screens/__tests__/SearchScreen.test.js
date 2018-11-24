import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SearchScreen from '../SearchScreen';

describe('SearchScreen', () => {
  const mockFn = jest.fn();
  const mockProps = {
    navigation: { navigate: mockFn },
  };

  test('Renders correctly', () => {
    const tree = render(<SearchScreen {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
