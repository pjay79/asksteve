import React from 'react';
import { render } from 'react-testing-library';
import Error from '../Error';

describe('Error', () => {
  test('Renders correctly', () => {
    const mockProps = {
      message: 'Wrong email or password',
    };
    const tree = render(<Error {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
});
