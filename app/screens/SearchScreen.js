import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import parse from 'parse-link-header';
import auth0 from '../services/auth0';
import { gitSearch, gitSearchPageLink } from '../services/gitSearch';
import Button from '../components/Button';
import Input from '../components/Input';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import * as COLORS from '../config/colors';

const { width } = Dimensions.get('window');

export default class SearchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    loading: false,
    searchTerm: 'facebook/react-native',
    results: [],
    pageLinks: null,
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = async () => {
    try {
      this.setState({ loading: true });
      const { searchTerm } = this.state;
      const response = await gitSearch(searchTerm);
      const links = response.headers.link;
      const parsedLinks = parse(links);
      this.setState({ results: response.data.items, pageLinks: parsedLinks }, () => {
        const { results, pageLinks } = this.state;
        console.log('Results: ', results, 'Page Links: ', pageLinks);
        this.setState({ loading: false });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  handlePageLink = async (url) => {
    try {
      this.setState({ loading: true });
      const response = await gitSearchPageLink(url);
      const links = response.headers.link;
      const parsedLinks = parse(links);
      this.setState({ results: response.data.items, pageLinks: parsedLinks }, () => {
        const { results, pageLinks } = this.state;
        console.log('Results: ', results, 'Page Links: ', pageLinks);
        this.setState({ loading: false });
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  handleLogout = async () => {
    try {
      const { navigation } = this.props;
      await AsyncStorage.removeItem('accessToken');
      if (Platform.os === 'ios') {
        await auth0.webAuth.clearSession();
      }
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Results', { repo: item })}>
        <View style={styles.card}>
          <View style={styles.cardDetailsWrapper}>
            <Text style={styles.cardDetailsTitleText}>{item.name}</Text>
            <Text style={styles.cardDetailsLanguageText}>{item.language}</Text>
          </View>
          <View style={styles.cardCountWrapper}>
            <Text style={styles.cardCountText}>{item.stargazers_count}</Text>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
              size={18}
              color={COLORS.PRIMARY_COLOR}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const {
      loading, searchTerm, results, pageLinks,
    } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="facebook/react-native"
            onChangeText={text => this.handleChangeText('searchTerm', text)}
            value={searchTerm}
          />
        </View>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.flatListWrapper}>
            <FlatList
              data={results}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        )}
        {pageLinks && <Pagination pageLinks={pageLinks} onChangePage={this.handlePageLink} />}
        <View style={styles.buttonWrapper}>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            style={{ backgroundColor: COLORS.ACCENT_COLOR, marginRight: 5 }}
          />
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
  inputWrapper: {},
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width,
  },
  cardDetailsWrapper: {},
  cardDetailsTitleText: {
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: '600',
  },
  cardDetailsLanguageText: {
    fontSize: 10,
    fontWeight: '200',
    fontStyle: 'italic',
  },
  cardCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCountText: {
    fontWeight: '600',
    fontSize: 10,
    marginRight: 5,
  },
  separator: {
    backgroundColor: COLORS.DIVIDER_COLOR,
    height: StyleSheet.hairlineWidth,
  },
});
