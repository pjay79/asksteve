import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';

const AuthStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Email: {
      screen: EmailScreen,
      navigationOptions: {
        title: 'Email',
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#000000',
      },
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: {
        title: 'Password',
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#000000',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#000000',
      },
    },
    Results: {
      screen: ResultsScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('repo').name,
        headerStyle: {
          backgroundColor: '#F7CF66',
        },
        headerTintColor: '#000000',
      }),
    },
  },
  {
    initialRouteName: 'Search',
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
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);
