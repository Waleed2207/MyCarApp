import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextBox = ({ children, borderText, isSummaryPage }) => {
  const containerStyle = isSummaryPage ? styles.summaryContainer : styles.textBox;
  const textContainerStyle = isSummaryPage ? styles.summaryTextContainer : styles.borderTextContainer;

  return (
    <View style={containerStyle}>
      {!isSummaryPage && <Text style={styles.borderText}>{borderText}</Text>}
      <View style={textContainerStyle}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  summaryContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  borderText: {
    position: 'absolute',
    top: -10,
    right: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  summaryTextContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 4,
    marginRight: 16,
  },
  borderTextContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 4,
    marginRight: 16,
    width: '100%',
    height: '100%',
    padding: '2%',
  }
});

export default TextBox;
