import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../Error';

test('Error renders correctly', () => {
  const tree = renderer.create(<Error message="Wrong email or password" />).toJSON();
  expect(tree).toMatchSnapshot();
});
