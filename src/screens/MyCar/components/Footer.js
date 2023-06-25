import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Line from '../components/Line';
const Footer=()=> {
    return (
        <View style={styles.footersidemenu}>
        <Image
          style={{ width: 120, height: 40}}
          resizeMode="contain"
          accessibilityLabel="Amdocs Logo"
          source={require('../../../assets/icons/LogosAmdocs.png')}></Image>
         <Line/>
         <Image
          style={{ width: 160,height: 40}}
          resizeMode="contain"
          accessibilityLabel="LogosAagWhite"
          source={require('../../../assets/icons/LogosAagWhite.png')}></Image>
         <View style={{alignItems: 'flex-end', marginTop:10,height:30}}>
           <Text style={{color: 'white',fontSize: 10,marginRight: 10}}>{'V 3.0B'}</Text>
         </View>
      </View>
    );
}
const styles = StyleSheet.create({
    footersidemenu :{
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingVertical: 14,
    paddingHorizontal: 18,
    
    
    },
  
  }); 
export default Footer;