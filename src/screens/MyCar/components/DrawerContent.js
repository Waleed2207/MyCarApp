import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {ActivityIndicator,Image, Modal,Button, StyleSheet, View} from 'react-native';
import {Avatar,Title,Caption, Paragraph,Drawer,Text,TouchableRipple,Switch } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
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
                    <View style={styles.userInfoSection}>
                      <View style={styles.profile}>
                        <View style={{ marginRight: 15, flexDirection: 'column', alignItems: 'flex-end' }}>
                          <Caption style={styles.caption}>שלום</Caption>
                          <Title style={styles.title}>רוני אביב</Title>
                        </View>
                        <Image
                          style={styles.logo}
                          resizeMode="contain"
                          source={require('../../../assets/icons/ProfilePhotoUser.png')}
                        />
                      </View>
                    </View>
                    <Button
                      onPress={() => props.navigation.navigate('Notifications')}
                      title="Go to notifications"
                    />
                  </View>
                </DrawerContentScrollView>
                <Drawer.Section></Drawer.Section>
              </LinearGradient>
            </View>

    );
};

//const windowHeight = Dimensions.get('window').height;
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

    }
});  

export default DrawerContent;