import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, AsyncStorage, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/auth0';
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
      if (Platform.os === 'ios') {
        await auth0.webAuth.clearSession();
      }
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigation } = this.props;
    const repo = navigation.getParam('repo');
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>{repo.name}</Text>
          <Text>{repo.owner.login}</Text>
        </View>
        <View>
          <Button title="Logout" onPress={this.handleLogout} />
        </View>
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
