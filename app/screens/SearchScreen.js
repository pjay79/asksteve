import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth0 from '../services/auth0';
import { gitSearch } from '../services/gitSearch';
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
    results: [],
  };

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = async () => {
    try {
      const { searchTerm } = this.state;
      const response = await gitSearch(searchTerm);
      this.setState({ results: response.data.items }, () => {
        const { results } = this.state;
        console.log(results);
      });
    } catch (error) {
      console.log(error);
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
              color="#F7CF66"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { searchTerm, results } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="facebook/react-native"
            onChangeText={text => this.handleChangeText('searchTerm', text)}
            value={searchTerm}
          />
        </View>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={results}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            style={{ backgroundColor: '#4A90E2', marginRight: 5 }}
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
    backgroundColor: '#BDBDBD',
    height: StyleSheet.hairlineWidth,
  },
});
