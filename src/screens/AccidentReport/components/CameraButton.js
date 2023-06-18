import * as ImagePicker from 'react-native-image-picker';

import {useCallback, useState} from 'react';
import {
  Button,
  Image,
  Modal,
  PermissionsAndroid,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RadioButtons from './RadioButtons';

const includeExtra = true;

export function CameraButton({style, onAddImage}) {
  const [modalVisible, setModalVisible] = useState(false);

  const askPermission = useCallback(async options => {
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
          if (res && res.assets && res.assets[0] && res.assets[0].uri) {
            onAddImage(res.assets[0].uri);
          }
        }
      });
    } else {
      console.log('Camera permission denied');
    }
  });

  const uploadImageFromGallery = useCallback(async () => {
    setModalVisible(false);
    ImagePicker.launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra,
      },
      res => {
        if (res && res.assets && res.assets[0] && res.assets[0].uri) {
          onAddImage(res.assets[0].uri);
        }
      },
    );
  });

  const uploadImageFromCamera = useCallback(async () => {
    setModalVisible(false);
    askPermission({
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    });
  });

  return (
    <>
      <Pressable
        style={[style, styles.cameraButoonContainer]}
        onPress={() => setModalVisible(true)}>
        <View>
          <Image
            source={require('../../../assets/accidentReport/icon3.png')}
            style={styles.cameraIcon}
          />
        </View>
      </Pressable>
      {/* <Text>{JSON.stringify(response)}</Text> */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <View style={styles.modalContainer}>
            <Text style={styles.titleModal}>העלאת תמונה חדשה</Text>
            <RadioButtons
              rightText={'צלם תמונה'}
              leftText={'בחר מהגלריה'}
              rightPress={uploadImageFromCamera}
              leftPress={uploadImageFromGallery}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraButoonContainer: {
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    backgroundColor: '#fff',
    elevation: 2,
    padding: 3,
  },
  cameraIcon: {
    width: 40,
    height: 40,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    width: '90%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    top: 200,
  },
  titleModal: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
