import React from 'react';
import {Button, View} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.navigate('AccidentReport')}
        title="Go to Accident report"
      />
    </View>
  );
};

export default HomeScreen;
