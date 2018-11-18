import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';

export default class PasswordScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    password: '',
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handlePasswordRealm = async () => {
    try {
      const { password } = this.state;
      const { navigation } = this.props;
      const email = navigation.getParam('email');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Enter your github password"
          onChangeText={text => this.handleChangeText('password', text)}
          value={password}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Submit"
            onPress={this.handlePasswordRealm}
            style={{ backgroundColor: '#BDBDBD' }}
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
    backgroundColor: '#F5F5F5',
  },
});
