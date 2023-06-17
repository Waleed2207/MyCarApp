import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const charger = require('../assets/icons/charger.png');

const ChargerImage = () => {
  return (
    <View style={styles.container}>
      <Image source={charger} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default ChargerImage;