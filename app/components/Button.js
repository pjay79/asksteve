import React from 'react';
import {
  TouchableOpacity, View, Text, Dimensions, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({
  title, onPress, style, textStyle,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonContainer, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000000',
    marginBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    width: width * 0.4,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape(),
  textStyle: PropTypes.shape(),
};

Button.defaultProps = {
  style: {},
  textStyle: {},
};

export default Button;
