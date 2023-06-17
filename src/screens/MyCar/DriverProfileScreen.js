import React from 'react';
import {View, Button} from 'react-native';
const DriverProfileScreen=({ navigation })=> {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to notifications"
        />
      </View>
    );
  }

export default DriverProfileScreen;