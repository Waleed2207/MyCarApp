import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, View} from 'react-native';
import {Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import CommonCard from './components/commonCard';
import Line from './components/Line';
import Notifcaion from './components/Notifcaion';
import data from '../../locals/data';
import Footer from './components/Footer';
import Userinfo from './components/Userinfo';
const DrawerContent = (props) => {

    return (
      <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#E50075', '#F05C62']} // Replace with your desired gradient colors
        start={{ x: 0, y: 0 }} // Start from the right side
        end={{ x: 1, y: 0 }} // End at the left side
        style={{ flex: 1 }}
      >
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Userinfo />
            <Notifcaion />
          </View>
          {data.slice(0, 4).map((item, index) => (
            // Render CommonCard component for the first four items in the data array
            <CommonCard
              key={index}
              title={item.title}
              icon={item.icon}
              count={item.count}
              onClick={() => {
                switch (index) {
                  case 0:
                    props.navigation.navigate('Home');
                    break;
                  case 1:
                    props.navigation.navigate('Notifications');
                    break;
                  case 2:
                    props.navigation.closeDrawer();
                    break;
                  case 3:
                    props.navigation.closeDrawer();
                    break;
                  default:
                    break;
                }
              }}
            />
          ))}
          <Line />
          <View style={styles.Txtpostion}>
            <Text style={styles.textinfo}>{'צרו קשר איתנו'}</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            {data.slice(4, 7).map((item, index) => (
              // Render CommonCard component for the next three items in the data array 
              <CommonCard
                key={index}
                title={item.title}
                icon={item.icon}
                count={item.count}
                onClick={() => {
                  switch (index + 4) {
                    case 4:
                      props.navigation.navigate('Home');
                      break;
                    case 5:
                      props.navigation.navigate('Notifications');
                      break;
                    case 6:
                      props.navigation.closeDrawer();
                      break;
                    default:
                      break;
                  }
                  //alert('title: ' + item.title);
                }}
              />
            ))}
          </View>
          <Footer />
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
    );
};
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

export default DrawerContent;