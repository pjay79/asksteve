import React from 'react';
import { render } from 'react-testing-library';
import Pagination from '../Pagination';

describe('Pagination', () => {
  const mockFn = jest.fn();
  const mockProps = {
    onChangePage: mockFn,
    pageLinks: {},
  };

  test('Renders correctly', () => {
    const tree = render(<Pagination {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
