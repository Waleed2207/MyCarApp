/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen.js';
import NotificationsScreen from './NotificationsScreen.js';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 

const Drawer = createDrawerNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerPosition: 'right'}} id="RightDrawer">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="ChangeHere" component={ChangeHere} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F6FAF6',
    flex: 1,
    padding: 10,
    borderColor: 'black',
  },
  rootContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: windowsHight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'flex-end',

  },
});

export default App;
