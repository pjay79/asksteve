import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, Platform, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/Auth';
import Button from '../components/Button';
import Input from '../components/Input';

export default class SearchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    searchTerm: 'facebook/react-native',
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate('Results');
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
    const { searchTerm } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Welcome to GitSearch</Text>
          <Text style={styles.secondaryText}>
            Enter a repository name and press submit to start searching Github. Press Logout to
            return to Home.
          </Text>
        </View>
        <View style={styles.searchWrapper}>
          <Input
            placeholder="facebook/react-native"
            onChangeText={text => this.handleChangeText('searchTerm', text)}
            value={searchTerm}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            style={{ backgroundColor: '#4A90E2' }}
          />
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
  headerWrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 20,
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  searchWrapper: {
    alignItems: 'center',
  },
});
