import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/auth0';
import Button from '../components/Button';
import Input from '../components/Input';
import * as COLORS from '../config/colors';

export default class PasswordScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    password: '',
    error: '',
    loading: false,
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handlePasswordRealm = async () => {
    try {
      this.setState({ loading: true });
      const { password } = this.state;
      const { navigation } = this.props;
      const login = navigation.getParam('login');
      console.log(login, password);
      await auth0.auth.passwordRealm({
        username: login,
        password,
        realm: 'Username-Password-Authentication',
        client_id: 'BGleraAIRgOTzjNcEF7hszJEhpMBUn4n',
        grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      });
      this.setState({ loading: true });
      navigation.navigate('AppStack');
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { password, error, loading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Enter your github password"
          onChangeText={text => this.handleChangeText('password', text)}
          value={password}
          secureTextEntry
        />
        {loading && (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator color={COLORS.BLACK_COLOR} />
          </View>
        )}
        <View style={styles.error}>
          <Text>{error}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Submit"
            onPress={this.handlePasswordRealm}
            style={{ backgroundColor: COLORS.PRIMARY_COLOR }}
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
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  error: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
});
