import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as COLORS from '../config/colors';

export default class LoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    try {
      const { navigation } = this.props;
      const token = await AsyncStorage.getItem('accessToken');
      console.log('token: ', token);
      if (token) {
        navigation.navigate('Search');
      } else {
        navigation.navigate('App');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
});
