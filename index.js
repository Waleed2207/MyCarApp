/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SliderWalkthrough from './src/screens/Walkthrough/SliderWalkthrough';
import App from './src/screens/Login/LoginScreen';

AppRegistry.registerComponent(appName, () => {
  // Check if the user finished going through the walkthrough
  const hasCompletedWalkthrough = false;

  // Return the appropriate component based on the flag's status
  return hasCompletedWalkthrough ? App : SliderWalkthrough;
});
