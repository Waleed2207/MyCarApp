import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderScreen from '../components/HeaderScreen';
import ChargerImage from '../components/ChargerImage';

const NonSummaryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ChargerImage />
        <Text style={styles.headline}>Headline</Text>
        <View style={styles.textBox}>
          <Text>Text inside the box</Text>
          <Text>Information about the text</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 16,
  },
  headline: {
    marginTop: 8,
  },
  textBox: {
    width: '80%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default NonSummaryPage;
