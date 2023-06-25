/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import Router from './routes/Routes'
function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Router/>
    </NavigationContainer>
  );
}
export default App;
