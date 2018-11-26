import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import LoginScreen from '../LoginScreen';

fireEvent.press = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

describe('LoginScreen', () => {
  const mockFn = jest.fn().mockReturnValue('bob23');
  const mockProps = {
    navigation: { navigate: mockFn },
  };

  test('Renders correctly', () => {
    const tree = render(<LoginScreen {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('Is working', () => {
    const { getByText } = render(<LoginScreen {...mockProps} />);
    const buttonNode = getByText('Next');
    fireEvent.press(buttonNode);
    expect(mockFn).toHaveBeenCalled();
  });
});
