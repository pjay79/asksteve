import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class SearchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogout = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.inputText}>Enter repository name:</Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 20,
  },
});
