import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#FFFFFF',
      },
    },
    Results: {
      screen: ResultsScreen,
      navigationOptions: {
        title: 'Results',
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#FFFFFF',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createSwitchNavigator(
  {
    Loading: {
      screen: LoadingScreen,
      navigationOptions: {
        header: null,
      },
    },
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);
