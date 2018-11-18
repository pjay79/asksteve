import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import auth0 from '../services/auth0';
import { gitSearchCommits } from '../services/gitSearch';
import Button from '../components/Button';
import Loading from '../components/Loading';
import * as COLORS from '../config/colors';

const { width } = Dimensions.get('window');

export default class ResultsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    commits: [],
    loading: false,
  };

  componentDidMount() {
    this.getCommitDetails();
  }

  getCommitDetails = async () => {
    try {
      this.setState({ loading: true });
      const { navigation } = this.props;
      const repo = navigation.getParam('repo');
      const response = await gitSearchCommits(repo.full_name);
      this.setState({ commits: response.data.items }, () => {
        const { commits } = this.state;
        console.log(commits);
        this.setState({ loading: false });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
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
      <View style={styles.cardHeaderWrapper}>
        <View style={styles.cardHeaderDetails}>
          <Text style={styles.cardDetailsTitleText}>{item.commit.author.name}</Text>
          <Text style={styles.cardDetailsDateText}>
            {moment(item.commit.committer.date).format('MMMM Do YYYY')}
          </Text>
        </View>
        {item.author && (
          <Image style={styles.cardHeaderImage} source={{ uri: `${item.author.avatar_url}` }} />
        )}
      </View>
      <Text style={styles.cardDetailsMessageText}>{item.commit.message}</Text>
    </View>
  );

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { commits, loading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.flatListWrapper}>
            <FlatList
              data={commits}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        )}
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
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  flatListWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width,
  },
  cardHeaderWrapper: {
    flexDirection: 'row',
    backgroundColor: COLORS.ACCENT_COLOR,
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  cardHeaderDetails: { flex: 1 },
  cardHeaderImage: {
    width: 25,
    height: 25,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE_COLOR,
  },
  cardDetailsTitleText: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '800',
  },
  cardDetailsDateText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.WHITE_COLOR,
  },
  cardDetailsMessageText: {
    fontSize: 12,
    fontWeight: '200',
  },
  separator: {
    backgroundColor: COLORS.DIVIDER_COLOR,
    height: StyleSheet.hairlineWidth,
  },
});
