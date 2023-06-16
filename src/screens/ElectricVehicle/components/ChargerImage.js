import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const charger = require('../assets/icons/charger.png');

const ChargerImage = () => {
  return (
    <View style={styles.container}>
      <Image source={charger} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ChargerImage;