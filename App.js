import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/screens/MainScreen";
import PlayWithComputer from "./src/screens/PlayWithComputer";
import History from "./src/screens/History";
import Instruction from "./src/screens/Instruction";

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    PWC: PlayWithComputer,
    History: History,
    Instruction: Instruction,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "RPS Game",
    },
  }
);

export default createAppContainer(navigator);
