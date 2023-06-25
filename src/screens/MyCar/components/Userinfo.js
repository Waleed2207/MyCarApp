import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Title,Caption} from 'react-native-paper';

const Userinfo=()=> {
    return (
      <View style={styles.userInfoSection}>
        <View style={styles.profile}>
          <View style={{ marginRight: 15, flexDirection: 'column', alignItems: 'flex-end' }}>
            <Caption style={styles.caption}>{'שלום'}</Caption>
            <Title style={styles.title}>{'רוני אביב'}</Title>
          </View>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../../assets/icons/ProfilePhotoUser.png')}
          />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    drawerContent :{
      flex:1,
      marginTop: 20,
      },
      title: {
        fontSize: 20,
        marginTop:1,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Cochin'
      },
      userInfoSection: {
        paddingLeft: 20,
        flex:1,
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
        fontFamily: 'Cochin'
      },
      row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight:'bold',
        marginRight: 3,
      },
      bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderWidth: 1,
      },
      preference: {
        flexDirection :'row',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      logo: {
        width: 70,
        height:70,
      },
      profile: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 20,
  
      },
      TextMessage :{
      marginTop: 5,
      fontSize: 15,
      color:'white'
      },
      Txtpostion: {
        alignItems: 'flex-end',
        marginRight: 25,
        marginTop:20,
      },
      textinfo :{
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
      },
  
  
  });  
export default Userinfo;