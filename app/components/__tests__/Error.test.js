import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../Error';

test('Error renders correctly', () => {
  const mockProps = {
    message: 'Wrong email or password',
  };
  const tree = renderer.create(<Error {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
