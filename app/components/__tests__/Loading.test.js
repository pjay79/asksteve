import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../Loading';

test('Button renders correctly', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
