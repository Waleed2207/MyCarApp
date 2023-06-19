import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const leftImage = require('../assets/icons/leftArrow.png');
const rightImage = require('../assets/icons/rightArrow.png');

const HeaderScreen = ({ isSummary }) => {
  const title = isSummary ? 'סיכום קריאה' : 'עמדת טעינה';
  const renderLeftArrow = isSummary ? null : <Image source={leftImage} style={styles.leftImage} />;
  const renderRightArrow = isSummary ? <Image source={rightImage} style={styles.rightImage} /> : <Image source={rightImage} style={styles.rightImage} />;

  return (
    <View style={styles.container}>
      {renderLeftArrow}
      <Text style={styles.title}>{title}</Text>
      {renderRightArrow}
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
    flex: 1,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Add this line to center-align the text horizontally
  },
  rightImage: {
    width: 50,
    height: 50,
  },
});

export default HeaderScreen;
