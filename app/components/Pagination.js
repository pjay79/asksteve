import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as COLORS from '../config/colors';

const Pagination = ({ pageLinks, onChangePage }) => (
  <View style={styles.paginationWrapper}>
    {pageLinks.first && (
      <TouchableOpacity
        onPress={() => onChangePage(pageLinks.first.url)}
        style={styles.buttonStyle}
        data-testid="iconFirst"
      >
        <FontAwesome5 name="fast-backward" size={18} color={COLORS.BLACK_COLOR} />
      </TouchableOpacity>
    )}
    {pageLinks.prev && (
      <TouchableOpacity
        onPress={() => onChangePage(pageLinks.prev.url)}
        style={styles.buttonStyle}
        data-testid="iconPrev"
      >
        <FontAwesome5 name="step-backward" size={18} color={COLORS.BLACK_COLOR} />
      </TouchableOpacity>
    )}
    {pageLinks.next && (
      <TouchableOpacity
        onPress={() => onChangePage(pageLinks.next.url)}
        style={styles.buttonStyle}
        data-testid="iconNext"
      >
        <FontAwesome5 name="step-forward" size={18} color={COLORS.BLACK_COLOR} />
      </TouchableOpacity>
    )}
    {pageLinks.last && (
      <TouchableOpacity
        onPress={() => onChangePage(pageLinks.last.url)}
        style={styles.buttonStyle}
        data-testid="iconLast"
      >
        <FontAwesome5 name="fast-forward" size={18} color={COLORS.BLACK_COLOR} />
      </TouchableOpacity>
    )}
  </View>
);

Pagination.propTypes = {
  pageLinks: PropTypes.shape(),
  onChangePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pageLinks: null,
};

const styles = StyleSheet.create({
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonStyle: {
    marginHorizontal: 5,
  },
});

export default Pagination;
