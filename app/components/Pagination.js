import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as COLORS from '../config/colors';

const Pagination = () => (
  <View style={styles.paginationWrapper}>
    <TouchableOpacity onPress={() => console.log('Go to first page.')} style={styles.buttonStyle}>
      <FontAwesome5 name="fast-backward" size={18} color={COLORS.BLACK_COLOR} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log('Go to prev page.')} style={styles.buttonStyle}>
      <FontAwesome5 name="step-backward" size={18} color={COLORS.BLACK_COLOR} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log('Go to next page.')} style={styles.buttonStyle}>
      <FontAwesome5 name="step-forward" size={18} color={COLORS.BLACK_COLOR} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log('Go to last page.')} style={styles.buttonStyle}>
      <FontAwesome5 name="fast-forward" size={18} color={COLORS.BLACK_COLOR} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonStyle: {
    marginHorizontal: 5,
  },
});

export default Pagination;
