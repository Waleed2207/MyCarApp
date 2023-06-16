import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const leftImage = require('../assets/icons/leftArrow.png');
const rightImage = require('../assets/icons/rightArrow.png');

const HeaderScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={leftImage} style={styles.leftImage} />
      <Text style={styles.title}>עמדת טעינה</Text>
      <Image source={rightImage} style={styles.rightImage} />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      backgroundColor: 'black',
      paddingHorizontal: 10,
    },
    leftImage: {
      width: 50,
      height: 50,
    },
    title: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    rightImage: {
      width: 50,
      height: 50,
    },
  });
  

export default HeaderScreen;