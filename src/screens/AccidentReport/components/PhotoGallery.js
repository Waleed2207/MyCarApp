import * as ImagePicker from 'react-native-image-picker';
import Permissions from 'react-native-permissions';

import {useCallback, useState} from 'react';
import {Button, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';

const includeExtra = true;

const actions = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

export function PhotoGallery() {
  const [response, setResponse] = useState(null);

  const askPermission = useCallback(async (options, setResponse) => {
    const grantedcamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    const grantedstorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (
      grantedcamera === PermissionsAndroid.RESULTS.GRANTED &&
      grantedstorage === PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('Camera & storage permission given');

      var options = {
        mediaType: 'photo', //to allow only photo to select ...no video
        saveToPhotos: true, //to store captured photo via camera to photos or else it will be stored in temp folders and will get deleted on temp clear
        includeBase64: false,
      };

      ImagePicker.launchCamera(options, res => {
        console.log('Response = ', res);

        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          // let source = res;
          // var resourcePath1 = source.assets[0].uri;
          const source = {uri: res.uri};
          console.log('response', JSON.stringify(res));

          setResponse(res);
        }
      });
    } else {
      console.log('Camera permission denied');
    }
  });

  const onButtonPress = useCallback((type, options) => {
    if (type === 'capture') {
      askPermission(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View style={styles.buttonContainer}>
      {actions.map(({title, type, options}) => {
        return (
          <Button
            key={title}
            title={title}
            onPress={() => onButtonPress(type, options)}
          />
        );
      })}
      <Text>{JSON.stringify(response)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
