import React, {useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {Buttons} from './components/Buttons';
import {Inputs} from './components/Inputs';

const LoginScreen = ({setIsAuthorized}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onPressLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthorized(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={isLoading}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>
      <View style={[styles.centeredView, {paddingHorizontal: 50}]}>
        <Inputs />
        <Buttons onPressLogin={onPressLogin} />
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
