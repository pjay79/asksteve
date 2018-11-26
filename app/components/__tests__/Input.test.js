import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Input from '../Input';

fireEvent.press = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

describe('Input', () => {
  const mockFn = jest.fn().mockReturnValue('Harry');
  const mockProps = {
    onChangeText: mockFn,
    placeholder: 'Enter your username',
    value: '',
  };

  test('Renders correctly', () => {
    const tree = render(<Input {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('Is working', () => {
    const { getByPlaceholderText } = render(<Input {...mockProps} />);
    const inputNode = getByPlaceholderText('Enter your username');
    expect(inputNode.value).toBe('');
    fireEvent.change(inputNode, { target: { value: 'Harry' } });
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn.mock.results[0].value).toBe('Harry');
  });
});
