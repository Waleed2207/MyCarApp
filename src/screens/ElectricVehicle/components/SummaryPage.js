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
          <TextBox isSummaryPage={true} style={styles.textBox}>
            <Text>לפניכם פרטי הקריאה אנא בדקו שכל הפרטים נכונים לפני השליחה.</Text>
          </TextBox>
          <View style={styles.imageContainer}>
            <ChargerImage isSummaryPage={true} text="עמדת טעינה" />
            <Text style={styles.secondaryHeadlineRight}>תיאור / הערות</Text>
            <Text style={styles.secondaryText}>
              יש בעיה עם עמדת טעינה מספר 3. כשמנסים להטעין העמדה לא מתחילה להטעין ורושמת שדרוש טיפול
            </Text>
            <Text style={styles.anotherHeadline}>תמונות</Text>
            <View style={styles.imagesContainer}>
              <Image source={require('../assets/icons/fuel.png')} style={styles.image} />
              <Image source={require('../assets/icons/fuel2.png')} style={styles.image} />
            </View>
            <View style={styles.line} />
            <Text style={styles.thirdHeadlineRight}>פרטים כללים</Text>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  textBox: {
    alignSelf: 'flex-end',
  },
  imageContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  secondaryHeadlineRight: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  secondaryText: {
    color: 'gray',
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
  anotherHeadline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 8,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    marginTop: 30,
    marginLeft: -16,
    marginRight: -16,
  },
  thirdHeadlineRight: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: 10
  },
});

export default SummaryPage;
