import React from 'react';
import { View, Text } from 'react-native';
import HeaderScreen from './components/HeaderScreen.js';

const ElectricVehicle = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Electric Vehicle Screen</Text>
      </View>
      {/* Add the rest of your content below the header */}
    </View>
  );
};

export default ElectricVehicle;