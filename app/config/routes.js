import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Search: {
      screen: SearchScreen,
    },
    Results: {
      screen: ResultsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainNavigator;
