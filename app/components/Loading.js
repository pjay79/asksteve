import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as COLORS from '../config/colors';

const Loading = () => (
  <View style={styles.loadingWrapper}>
    <ActivityIndicator color={COLORS.BLACK_COLOR} />
  </View>
);

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Loading;
