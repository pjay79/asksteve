import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, Image, StyleSheet, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/auth0';
import Button from '../components/Button';

export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    // this.checkToken();
  }

  checkToken = async () => {
    try {
      const { navigation } = this.props;
      const token = await AsyncStorage.getItem('accessToken');
      console.log('token: ', token);
      if (token) {
        navigation.navigate('Search');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleLogin = () => {
    const { navigation } = this.props;
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
        audience: 'https://asksteve.au.auth0.com/userinfo',
        prompt: 'login',
      })
      .then((credentials) => {
        console.log(credentials);
        AsyncStorage.setItem('accessToken', JSON.stringify(credentials.accessToken));
        navigation.navigate('Search');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.gitImage}
          resizeMode="contain"
          source={require('../assets/images/GitHub-Mark.png')}
        />
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>GitSearch</Text>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require('../assets/images/app-logo.png')}
          />
        </View>
        <Button title="Login" onPress={this.handleLogin} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7CF66',
  },
  gitImage: {
    width: 32,
  },
  headerWrapper: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 54,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 25,
  },
  headerImage: {
    width: 200,
  },
});
