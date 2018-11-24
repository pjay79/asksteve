import React from 'react';
import { render } from 'react-testing-library';
import Loading from '../Loading';

describe('Loading', () => {
  test('Renders correctly', () => {
    const tree = render(<Loading />);
    expect(tree).toMatchSnapshot();
  });
});
