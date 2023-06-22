/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from './Login/LoginScreen';
import TimerScreen from './Timer/TimerScreen';
import SliderWalkthrough from './Walkthrough/SliderWalkthrough';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Walkthrough"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Walkthrough" component={SliderWalkthrough} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
