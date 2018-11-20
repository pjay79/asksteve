import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';
import * as COLORS from './colors';

const AuthStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerStyle: {
          backgroundColor: COLORS.PRIMARY_COLOR,
        },
        headerTintColor: COLORS.BLACK_COLOR,
      },
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: {
        title: 'Password',
        headerStyle: {
          backgroundColor: COLORS.PRIMARY_COLOR,
        },
        headerTintColor: COLORS.BLACK_COLOR,
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
          backgroundColor: COLORS.PRIMARY_COLOR,
        },
        headerTintColor: COLORS.BLACK_COLOR,
      },
    },
    Results: {
      screen: ResultsScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('repo').name,
        headerStyle: {
          backgroundColor: COLORS.PRIMARY_COLOR,
        },
        headerTintColor: COLORS.BLACK_COLOR,
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
