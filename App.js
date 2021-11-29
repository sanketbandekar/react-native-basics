import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Components from "./src/screens/Components";
import ListScreens from "./src/screens/ListScreens";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CustomColorScreen from './src/screens/CustomColorScreen'
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Components,
    ListScreen: ListScreens,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    CustomColor: CustomColorScreen,
    TextDemo: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
