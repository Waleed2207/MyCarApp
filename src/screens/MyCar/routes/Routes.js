import React from 'react';
import { createDrawerNavigator,DrawerToggleButton  } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen.js';
import NotificationsScreen from '../NotificationsScreen.js';
import DrawerContent from '../DrawerContent.js';

const Drawer = createDrawerNavigator();
const Routes=()=> {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'transparent',
          },
          drawerPosition: 'right',
          headerLeft: false,
          headerRight: () => <DrawerToggleButton />,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginLeft: 'auto',
          },
        }}
       >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    );
}

export default Routes;