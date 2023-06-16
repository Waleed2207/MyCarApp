import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Information</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.headline}>Headline</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida diam eu lobortis
          rutrum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  infoContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  infoText: {
    color: '#fff',
  },
  textBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default TextBox;