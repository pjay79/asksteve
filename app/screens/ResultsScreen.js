import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, StyleSheet, AsyncStorage, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import auth0 from '../services/auth0';
import { gitSearchCommits } from '../services/gitSearch';
import Button from '../components/Button';

export default class ResultsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    commits: [],
  };

  componentDidMount() {
    this.getCommitDetails();
  }

  getCommitDetails = async () => {
    try {
      const { navigation } = this.props;
      const repo = navigation.getParam('repo');
      const response = await gitSearchCommits(repo.full_name);
      this.setState({ commits: response.data.items }, () => {
        const { commits } = this.state;
        console.log(commits);
      });
    } catch (error) {
      console.log(error);
    }
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
    const { navigation } = this.props;
    const repo = navigation.getParam('repo');
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>{repo.name}</Text>
          <Text>{repo.owner.login}</Text>
        </View>
        <View>
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
});
