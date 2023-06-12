import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import {loginIcons} from '../../../uiKit/icons';
export const Buttons = ({onPressLogin}) => {
  let url = 'mailto:support@anm.software';

  const sendAnEmail = () => {
    // Linking.openURL(url);
    Crashes.generateTestCrash();
    // throw new Error('crash test from contact button');
  };

  return (
    <View style={styles.buttonsContainer}>
      <Pressable style={styles.loginButton} onPress={onPressLogin}>
        <Image source={loginIcons.loginButtonArrow} />
      </Pressable>
      <View style={styles.needHelpContainer}>
        <Text>{'צריך עזרה?'}</Text>
        <Pressable onPress={sendAnEmail}>
          <Text style={styles.contactLink}>{'יצירת קשר עם התמיכה'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    padding: 20,
    borderRadius: 90,
    backgroundColor: 'purple',
  },
  contactLink: {
    color: 'rgb(56,82,242)',
  },
});
