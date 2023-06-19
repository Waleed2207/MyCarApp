import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {accidentReport} from '../../../uiKit/icons';

export default function ImportantNote({text, image}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={image}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 8,
  },
  text: {
    textAlign: 'right',
    fontSize: 16,
  },
  img: {
    height: 32,
    width: 32,
  },
  imgWrapper: {
    borderRadius: 100,
    backgroundColor: '#E6E5E9',
    padding: 12.5,
  },
});
