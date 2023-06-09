import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {translate} from '../../../locals/index';

export const Inputs = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{translate('enterSubtitle')}</Text>
      <Text style={styles.timerText}>{'מספר הטלפון והמייל שלכם'}</Text>
      <TextInput
        placeholder="הקלד אימייל"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="הקלד מספר"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
