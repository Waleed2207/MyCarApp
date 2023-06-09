import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default BaseView = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaViewBase}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewBase: {
    flex: 1,
  },
});
