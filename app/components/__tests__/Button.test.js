import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Button renders correctly', () => {
  const mockProps = {
    onPress: jest.fn(),
    title: 'Submit',
  };
  const tree = renderer.create(<Button {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
