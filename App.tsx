import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginScreen from './src/screens/Login';
import TimerScreen from './src/screens/Timer';
function App(): JSX.Element {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaViewBase}>
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              resizeMode={'contain'}
              source={require('./src/assets/icons/logo.png')}
            />
          </View>
          <Pressable
            onPress={() => isAuthorized && setIsAuthorized(false)}
            style={styles.headerTextContainer}>
            <Text style={styles.logoText}>{'My Timer'}</Text>
          </Pressable>
          <View style={styles.rightContainer} />
        </View>
        <View style={styles.bodyContainer}>
          {isAuthorized ? (
            <TimerScreen />
          ) : (
            <LoginScreen setIsAuthorized={setIsAuthorized} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bodyContainer: {flex: 9},
  safeAreaViewBase: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  headerTextContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  logoText: {
    color: 'black',
    fontSize: 35,
    fontWeight: '900',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
