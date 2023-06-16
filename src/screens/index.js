/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AccidentReport} from './AccidentReport';
import LoginScreen from './Login';
import TimerScreen from './Timer';
const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="AccidentReport" component={AccidentReport} />
    </Stack.Navigator>
  );
};

export default Screens;
