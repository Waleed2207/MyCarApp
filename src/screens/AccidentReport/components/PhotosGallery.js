import {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import SVG from 'react-native-svg';
// import MySVG from '../../../assets/accidentReport/icon6.svg';
import {CameraButton} from './CameraButton';

export function PhotosGallery() {
  const [imagesArr, setImages] = useState([]);

  function addImage(image) {
    console.log('image', image);

    setImages(prevImages => [image, ...prevImages]);
  }

  return (
    <ScrollView horizontal={true}>
      <View style={styles.imagesContainer}>
        <CameraButton style={styles.imageContainer} onAddImage={addImage} />

        {imagesArr.map((currImage, index) => {
          console.log(currImage + index + 'currImage + index');

          return (
            <View key={currImage + index} style={styles.imageContainer}>
              <Image source={{uri: currImage}} style={styles.image} />
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../../assets/accidentReport/icon6.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    overflow: 'scroll',
    gap: 5,
  },
  imageContainer: {
    width: 110,
    height: 150,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  iconContainer: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
