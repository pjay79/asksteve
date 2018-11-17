import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  AsyncStorage,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
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

  keyExtractor = item => item.url;

  renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardDetailsWrapper}>
        <Text style={styles.cardDetailsTitleText}>{item.commit.committer.name}</Text>
        <Text style={styles.cardDetailsTitleText}>
          {moment(item.commit.committer.date).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
        <Text style={styles.cardDetailsMessageText}>{item.commit.message}</Text>
      </View>
    </View>
  );

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { commits } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={commits}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Logout" onPress={this.handleLogout} style={{ marginLeft: 5 }} />
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
  inputWrapper: {},
  flatListWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardDetailsWrapper: {},
  cardDetailsTitleText: {
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: '600',
  },
  cardDetailsMessageText: {
    fontSize: 10,
    fontWeight: '200',
  },
  separator: {
    backgroundColor: '#BDBDBD',
    height: StyleSheet.hairlineWidth,
  },
});
