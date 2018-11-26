import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Pagination from '../Pagination';

fireEvent.press = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

describe('Pagination', () => {
  const mockFn = jest.fn();
  const mockProps = {
    onChangePage: mockFn,
    pageLinks: {
      first: 'https://www.github.com/user/repo/url&first',
      prev: 'https://www.github.com/user/repo/url&prev',
      next: 'https://www.github.com/user/repo/url&next',
      last: 'https://www.github.com/user/repo/url&last',
    },
  };
  test('Renders correctly', () => {
    const tree = render(<Pagination {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('Icons exist', () => {
    const { getByTestId } = render(<Pagination {...mockProps} />);
    const icons = [];
    const iconFirst = getByTestId('iconFirst');
    const iconPrev = getByTestId('iconPrev');
    const iconNext = getByTestId('iconNext');
    const iconLast = getByTestId('iconLast');
    icons.push.apply(icons, [iconFirst, iconPrev, iconNext, iconLast]);
    expect(icons).toBeDefined();
  });

  test('Icon is clickable', () => {
    const { getByTestId } = render(<Pagination {...mockProps} />);
    const iconNode = getByTestId('iconNext');
    fireEvent.press(iconNode);
    expect(mockFn).toHaveBeenCalled();
  });
});
