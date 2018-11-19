import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <View style={styles.errorWrapper}>
    <Text>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
});

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: '',
};

export default Error;
