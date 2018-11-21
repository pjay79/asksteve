import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({
  onChangeText, value, placeholder, secureTextEntry, style,
}) => (
  <TextInput
    placeholder={placeholder}
    returnKeyType="done"
    underlineColorAndroid="transparent"
    style={[styles.inputStyle, style]}
    onChangeText={onChangeText}
    value={value}
    secureTextEntry={secureTextEntry}
    autoCorrect={false}
    autoCapitalize="none"
    autoFocus
  />
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width,
  },
});

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.shape(),
};

Input.defaultProps = {
  secureTextEntry: false,
  style: {},
};

export default Input;
