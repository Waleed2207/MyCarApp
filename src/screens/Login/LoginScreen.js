import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from 'react-native';
import Header from './components/Header';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = () => {
  const [text, setText] = useState('כתובת מייל');
  const [number, setNumber] = useState('מספר טלפון');

  const onChangeNumber = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <DismissKeyboard>
        <View style={styles.rootContainer}>
          <Header />
          <View style={styles.textPart}>
            <Text>
              להתחברות לאפליקציית אמדוקס אנא הזינו את מספר הטלפון והאימייל שלכם
            </Text>
            <View>
              <View style={styles.container}>
                <View style={styles.sectionStyle}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                  />
                  <Image
                    source={require('../../assets/icons/callSquare.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                  <Image
                    source={require('../../assets/icons/messageSquare.png')}
                    style={styles.imageStyle}
                  />
                </View>
              </View>
              {/* </DismissKeyboard>  */}
            </View>
            <View style={styles.secondComponent}>
              <View>
                <Text style={styles.help}>צריך עזרה?</Text>
              </View>
              <TouchableHighlight
                onPress={() => Linking.openURL('https://www.ynet.co.il')}>
                <View>
                  <Text style={styles.support}>יצירת קשר עם התמיכה</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.arrowCircle}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.google.com')}>
                  <LinearGradient
                    colors={['#A9333A', '#E1578A', '#FAE98F']}
                    style={styles.gradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}>
                    <Image
                      style={styles.arrow}
                      source={require('../../assets/icons/login-button-arrow.png')}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  title: {
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 74,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: windowHeight * 0.1, //10% of total screen
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: 'white',
  },
  textPart: {
    flex: 1,
    flexDirection: 'column',
    padding: 40,
  },
  secondComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  help: {
    marginTop: 50,
    alignSelf: 'flex-end',
  },
  support: {
    alignSelf: 'flex-end',
    color: 'blue',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
  gradient: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12.5}, {translateY: -12.5}],
  },
  arrowCircle: {
    position: 'absolute',
    bottom: -9,
    left: -7,
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    width: '85%',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default LoginScreen;
