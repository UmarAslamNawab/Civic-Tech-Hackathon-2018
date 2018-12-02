import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import AppIntro from '../screens/appIntro';
import Complain from '../screens/complain';
import CameraExample from '../screens/camra';


const AppNavigator = createStackNavigator({
    AppIntro: {
      screen: AppIntro
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    },
    Complain: {
      screen: Complain
    },
    Camra: {
      screen: CameraExample
    },
  });
  
  export default createAppContainer(AppNavigator);