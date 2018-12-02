import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button';
import * as COLORS from '../config/colors';

export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

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
          <Text style={styles.headerText}>Git Lookup</Text>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require('../assets/images/app-logo.png')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Start"
            onPress={() => navigation.navigate('App')}
            style={{ backgroundColor: COLORS.ACCENT_COLOR, marginLeft: 5, marginBottom: 20 }}
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
