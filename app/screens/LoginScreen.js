import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import * as COLORS from '../config/colors';

export default class LoginScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    login: '',
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { login } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Enter your github username or email"
          onChangeText={text => this.handleChangeText('login', text)}
          value={login}
        />
        <Button
          title="Next"
          onPress={() => navigation.navigate('Password', { login })}
          style={{ backgroundColor: COLORS.PRIMARY_COLOR }}
        />
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
});
