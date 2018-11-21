import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('TextInput', () => {
  const RealComponent = require.requireActual('TextInput');
  const React = require('react');
  // eslint-disable-next-line react/destructuring-assignment
  const TextInput = props => React.createElement('TextInput', { ...props, autoFocus: false }, props.children);
  TextInput.propTypes = RealComponent.propTypes;
  return TextInput;
});

configure({ adapter: new Adapter() });
