import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

test('Input renders correctly', () => {
  const mockProps = {
    onChangeText: jest.fn(),
    placeholder: 'test@test.com',
    value: 'test@test.com',
  };
  const tree = renderer.create(<Input {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
