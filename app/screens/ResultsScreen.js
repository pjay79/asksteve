import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class ResultsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogout = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View />
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
});
