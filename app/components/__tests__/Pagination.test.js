import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

test('Pagination renders correctly', () => {
  const mockProps = {
    onChangePage: jest.fn(),
    pageLinks: {},
  };
  const tree = renderer.create(<Pagination {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
