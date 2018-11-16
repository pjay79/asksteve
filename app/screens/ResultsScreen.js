import React, { Component } from 'react';
import {
  SafeAreaView, View, StyleSheet, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/Auth';
import Button from '../components/Button';

export default class ResultsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogout = async () => {
    const { navigation } = this.props;
    try {
      await AsyncStorage.removeItem('accessToken');
      await auth0.webAuth.clearSession();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
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
