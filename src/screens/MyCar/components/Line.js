import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const line=()=> {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop: 15, marginBottom:15 }}>
            <View style={{ width: '90%',borderTopWidth: 0.2,borderBottomColor: 0.2,borderBottomColor: '#C7C7C7',borderTopColor: '#C7C7C7'}}></View>
      </View>
      );
    }

export default line;