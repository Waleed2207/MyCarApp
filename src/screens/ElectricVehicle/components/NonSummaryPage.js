import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ChargerImage from '../components/ChargerImage';
import TextBox from '../components/TextBox';

const NonSummaryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <ChargerImage />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>פרטים</Text>
          <TextBox borderText="תיאור / הערות" isNonSummary={true}>
            <Text>יש בעיה עם עמדת טעינה מס 3. כשמנסים להטעין העמדה לא מתחילה להטעין ורושמת שדרוש טיפול</Text>
          </TextBox>
          <Text style={styles.headline}>הוספת תמונות</Text>
          <View style={styles.imageRow}>
            <Image source={require('../assets/icons/leftArrow.png')} style={styles.image} />
            <Image source={require('../assets/icons/leftArrow.png')} style={styles.image} />
            <Image source={require('../assets/icons/leftArrow.png')} style={styles.image} />
          </View>
          <TextBox borderText="מיקום נוכחי / הנחיות הגעה">
            <Text>עמדת הטענה בשער המערבי</Text>
          </TextBox>
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
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  imageContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black'
  },
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
  imageRow: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
});

export default NonSummaryPage;
