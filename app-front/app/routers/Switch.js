import { createSwitchNavigator, createAppContainer } from "react-navigation";
import TabStackScreen from "./TabStackScreen";
import LogSwitch from "./LogSwitch";

export default createAppContainer(
  createSwitchNavigator(
    {
      LogSwitch,
      TabStackScreen,
    },
    {
      initialRouteName: "LogSwitch",
    }
  )
);
