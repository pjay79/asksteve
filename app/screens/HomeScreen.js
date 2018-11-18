import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, Image, StyleSheet, AsyncStorage, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/auth0';
import Button from '../components/Button';
import * as COLORS from '../config/colors';

export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = () => {
    const { navigation } = this.props;
    navigation.navigate('Search');
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
    const { navigation } = this.props;
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
        <View style={styles.buttonWrapper}>
          <Button
            title="Auth0"
            onPress={this.handleLogin}
            style={{ backgroundColor: COLORS.ACCENT_COLOR, marginRight: 5 }}
          />
          <Button
            title="GitHub"
            onPress={() => navigation.navigate('Email')}
            style={{ marginLeft: 5 }}
          />
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
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingTop: 10,
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
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
