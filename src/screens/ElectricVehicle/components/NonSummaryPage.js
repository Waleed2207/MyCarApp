import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChargerImage from '../components/ChargerImage';
import TextBox from '../components/TextBox';

const NonSummaryPage = () => {

  const [images, setImages] = useState([]);


  const onPlaceholderClick = () => {
    const image = 'test';
    setImages(prevImages => [...images, image]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <ChargerImage />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>פרטים</Text>
          <TextBox borderText="תיאור / הערות" isNonSummary={true}>
            <Text style={{ color: 'black' }}>יש בעיה עם עמדת טעינה מס 3. כשמנסים להטעין העמדה לא מתחילה להטעין ורושמת שדרוש טיפול</Text>
          </TextBox>
          <Text style={styles.headline}>הוספת תמונות</Text>
          <View style={styles.imageRow}>
              {images.map((image, idx) => {
                return (
                  <Image
                    key={idx.toString()} 
                    source={require('../assets/icons/placeHolder.png')}
                    style={styles.image}
                  />
                );
              })}
              <TouchableOpacity onPress={onPlaceholderClick}>
                <Image source={require('../assets/icons/placeHolder.png')} style={styles.image} />
              </TouchableOpacity>
            </View>
          <TextBox borderText="מיקום נוכחי / הנחיות הגעה">
            <Text style={{ color: 'black' }}>עמדת הטענה בשער המערבי</Text>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    height: '10%'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
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
    justifyContent: 'flex-end'


  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
});

export default NonSummaryPage;
