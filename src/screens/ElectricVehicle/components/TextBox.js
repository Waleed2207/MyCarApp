import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBox = ({ children, borderText }) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.borderText}>{borderText}</Text>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  borderText: {
    position: 'absolute',
    top: -10,
    right: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TextBox;
