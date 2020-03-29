import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'
import Intro from './src/screens/Intro'
import List from './src/screens/List'
import ImageScreen from './src/screens/ImageScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Intro: Intro,
    List: List,
    Image: ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
