import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Input from '../Input';

describe('Input', () => {
  const mockProps = {
    onChangeText: jest.fn(),
    placeholder: 'Enter your username',
    value: '',
  };

  test('Renders correctly', () => {
    const tree = renderer.create(<Input {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Is working', () => {
    const { getByTestId } = render(<Input {...mockProps} />);
    const inputNode = getByTestId('input');
    expect(inputNode).toBeInTheDOM();
  });
});
