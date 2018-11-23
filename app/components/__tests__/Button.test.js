import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Button from '../Button';

fireEvent.press = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

describe('Button', () => {
  const mockProps = {
    onPress: jest.fn(),
    title: 'Submit',
  };

  test('Renders correctly', () => {
    const tree = renderer.create(<Button {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Is working', () => {
    const { getByText } = render(<Button {...mockProps} />);
    const button = getByText('Submit');
    fireEvent.press(button);
  });
});
