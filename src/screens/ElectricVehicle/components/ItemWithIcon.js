import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemWithIcon = ({ imageSource, text1, text2 }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={imageSource} style={styles.iconImage} />
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>{text1}</Text>
        <Text style={styles.contentText}>{text2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 15,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'right',
    marginRight: 10
  },
});

export default ItemWithIcon;
