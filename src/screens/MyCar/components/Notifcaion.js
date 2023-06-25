import React, {useEffect, useState} from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native';

const Notifcaion = () => {
    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(3);
    return (
      <View style={styles.mainnotification}>
      <TouchableOpacity
        style={styles.SmS_notif}
        onPress={() => {
          // Handle onPress action for the first component
        }}
      >
        <View style={styles.notification}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{counter}</Text>
          </View>
        </View>
        <View style={styles.imagepostion}>
          <Image
            style={styles.GeneralMessage}
            resizeMode="contain"
            source={require('../../../assets/icons/GeneralMessage.png')}
          />
          <Text style={styles.TextMessage}>{'הודעת שלי'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SmS_notif}
        onPress={() => {
          // Handle onPress action for the second component
        }}
      >
        <View style={styles.notification}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{counter2}</Text>
          </View>
        </View>
        <View style={styles.imagepostion}>
          <Image
            style={styles.GeneralMessage}
            resizeMode="contain"
            source={require('../../../assets/icons/ServiceIconsGeneral.png')}
          />
          <Text style={styles.TextMessage}>{'הקריאות שלי'}</Text>
        </View>
      </TouchableOpacity>
    </View>
    
    );
};
const styles = StyleSheet.create({
notification: {
    width: 25,
    height: 25,
    textAlign: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: 'blue',
    borderRadius: 25 / 2,
  },    
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainnotification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  SmS_notif: {
    margin: 5,
    flexDirection: 'column',
    width: 120,
    height: 120,
    shadowRadius: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(246, 232, 232, 0.5)',
  },
  
  imagepostion:{
  alignItems: 'center',

  },
  GeneralMessage: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  
  TextMessage :{
  marginTop: 5,
  fontSize: 15,
  color:'white'
  },
}); 
export default Notifcaion;