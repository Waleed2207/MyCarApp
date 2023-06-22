import React, {Children, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Button,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DefaultModal = ({
  modalState,
  children,
  buttonText,
  hideModal,
  setModalVisible,
  navigation,
}) => {
  const closeModal = () => {
    hideModal();
    // navigation.navigate('Walkthrough');
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState}
        onRequestClose={closeModal}>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>התחדשנו!</Text>
            <Text style={styles.modalInnerText}>
              על מנת להשתמש באפליקציה יש לעדכן את האפליקציה דרך חנות האפליקציות.
            </Text>
            <LinearGradient
              colors={['#A9333A', '#E1578A', '#FAE98F']}
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Pressable style={[styles.button]} onPress={closeModal}>
                <Text style={styles.textStyle}>עדכן גרסה</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flex: 1,
    backgroundColor: 'white',
  },
  modalView: {
    marginTop: 120,
    marginLeft: 45,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 300,
    elevation: 5,
  },
  button: {
    padding: 10,
    width: 150,
    height: 43,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  modalInnerText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  gradient: {
    borderRadius: 30,
  },
});

export default DefaultModal;
