import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const charger = require('../assets/icons/charger.png');

const ChargerImage = ({ isSummaryPage, text }) => {
  const imageStyle = isSummaryPage ? styles.summaryImage : styles.image;

  return (
    <View style={styles.container}>
      {isSummaryPage && text && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      <Image source={charger} style={imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    // height: '70%'
  },
  textContainer: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 150,
    height: 150,
  },
  summaryImage: {
    width: 100,
    height: 100,
  },
});

export default ChargerImage;
