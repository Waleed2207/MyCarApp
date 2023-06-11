import React, {useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import BaseView, {BodyBaseView} from '../../uiKit/BaseView';
import Header from '../../uiKit/Header';
import {Buttons} from './components/Buttons';
import {Inputs} from './components/Inputs';
const LoginScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onPressLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Timer');
      // setIsAuthorized(true);
    }, 3000);
  };

  return (
    <BaseView>
      <Header />
      <Modal animationType="slide" transparent={false} visible={isLoading}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>
      <BodyBaseView>
        <Inputs />
        {/* <Buttons onPressLogin={onPressLogin} /> */}
      </BodyBaseView>
    </BaseView>
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
