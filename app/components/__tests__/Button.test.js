import React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(<Button {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Is working', () => {
    const { getByText } = render(<Button {...mockProps} />);
    const buttonNode = getByText('Submit');
    fireEvent.press(buttonNode);
  });
});
