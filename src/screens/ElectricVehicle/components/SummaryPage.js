import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextBox from '../components/TextBox';
import ChargerImage from '../components/ChargerImage';

const SummaryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headline}>עמדת טעינה</Text>
          <TextBox isSummaryPage={true}>
            <Text>לפניכם פרטי הקריאה אנא בדקו שכל הפרטים נכונים לפני השליחה.</Text>
          </TextBox>
          <View style={styles.imageContainer}>
          <ChargerImage isSummaryPage={true} text="עמדת טעינה" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  headerContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  imageContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default SummaryPage;
