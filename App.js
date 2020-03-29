import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import Intro from "./src/screens/Intro";
import List from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from './src/screens/CounterScreen';
import RandomCOlor from './src/screens/RandomColor'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Intro: Intro,
    List: List,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: RandomCOlor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
