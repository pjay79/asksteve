import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

test('Pagination renders correctly', () => {
  const onChangePage = jest.fn();
  const tree = renderer.create(<Pagination pageLinks={{}} onChangePage={onChangePage} />).toJSON();
  expect(tree).toMatchSnapshot();
});
