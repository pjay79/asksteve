import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet,
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
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handlePasswordRealm = async () => {
    try {
      const { password } = this.state;
      const { navigation } = this.props;
      const email = navigation.getParam('email');
      console.log(email, password);
      await auth0.auth.passwordRealm({
        username: email,
        password,
        realm: 'Username-Password-Authentication',
        client_id: 'BGleraAIRgOTzjNcEF7hszJEhpMBUn4n',
        grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      });
      navigation.navigate('AppStack');
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    }
  };

  render() {
    const { password, error } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Enter your github password"
          onChangeText={text => this.handleChangeText('password', text)}
          value={password}
          secureTextEntry
        />
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
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});
