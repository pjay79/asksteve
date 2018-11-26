import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../Button';

fireEvent.press = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

describe('Button', () => {
  const mockFn = jest.fn();
  const mockProps = {
    onPress: mockFn,
    title: 'Submit',
  };

  test('Renders correctly', () => {
    const tree = render(<Button {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('Is working', () => {
    const { getByText } = render(<Button {...mockProps} />);
    const buttonNode = getByText('Submit');
    fireEvent.press(buttonNode);
    expect(mockFn).toHaveBeenCalled();
  });
});
