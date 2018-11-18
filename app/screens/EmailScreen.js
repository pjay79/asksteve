import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import * as COLORS from '../config/colors';

export default class EmailScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    email: '',
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Enter your github email or username"
          onChangeText={text => this.handleChangeText('email', text)}
          value={email}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('Password', { email })}
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
});
