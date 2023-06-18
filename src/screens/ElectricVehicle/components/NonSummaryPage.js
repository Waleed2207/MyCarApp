import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ChargerImage from '../components/ChargerImage';
import TextBox from '../components/TextBox';

const NonSummaryPage = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const onImagePress = (index) => {
    setIsLoading(true);
    setLoadingIndex(index);
    // Simulate a loading delay with setTimeout
    setTimeout(() => {
      setIsLoading(false);
      setImages((prevImages) => [...prevImages, require('../assets/icons/placeHolder.png')]);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <ChargerImage />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>פרטים</Text>
          <TextBox borderText="תיאור / הערות" isNonSummary={true}>
            <Text style={{ color: 'black' }}>
              יש בעיה עם עמדת טעינה מס 3. כשמנסים להטעין העמדה לא מתחילה להטעין ורושמת שדרוש טיפול
            </Text>
          </TextBox>
          <Text style={styles.headline}>הוספת תמונות</Text>
          <View style={styles.imageRow}>
            {images.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => onImagePress(index)}>
                <View style={styles.imageWrapper}>
                  <Image source={image} style={styles.image} />
                  {isLoading && loadingIndex === index && (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="large" color="red" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => onImagePress(images.length)}>
              <View style={styles.placeholderContainer}>
                <Image source={require('../assets/icons/placeHolder.png')} style={styles.image} />
                {isLoading && loadingIndex === images.length && (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="red" />
                  </View>
                )}
              </View>
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
    borderTopRightRadius: 30,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: '10%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 8,
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  placeholderContainer: {
    position: 'relative',
  },
});

export default NonSummaryPage;
