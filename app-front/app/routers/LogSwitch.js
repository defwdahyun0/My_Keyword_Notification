import LoginScreen from "../screens/Login/LoginScreen";
import IDScreen from "../screens/Login/IDScreen";
import PWScreen from "../screens/Login/PWScreen";
import SignupScreen from "../screens/Login/SignupScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen,
      IDScreen,
      PWScreen,
      SignupScreen,
    },
    {
      initialRouteName: "LoginScreen",
    }
  )
);
