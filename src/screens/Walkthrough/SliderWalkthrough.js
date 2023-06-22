import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import DefaultModal from '../Modals/DefaultModal';

const SliderWalkthrough = ({navigation}) => {
  const [hasCompletedWalkthrough, setHasCompletedWalkthrough] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  // Set timer before displaying to Update version Modal
  // const timer = setTimeout(() => {
  //   if (isOn) setCounter(preState => preState + 1);
  // }, 2000);

  const hideModal = () => {
    console.log('hide modal');
    setModalVisible(false);
    navigation.navigate('Login');
  };

  // When user clicks on 'Let's Start' button
  const handleGetStarted = () => {
    console.log('open modal');
    setHasCompletedWalkthrough(true);
    setModalVisible(true);
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {/* If user hasn't completed the walkthrough */}
      {hasCompletedWalkthrough ? (
        // <DefaultModal
        //   modalState={modalVisible}
        //   buttonText={'עדכן גרסה'}
        //   hideModal={hideModal}></DefaultModal>
        <Button title="Login" onPress={hideModal} />
      ) : (
        <LinearGradient
          colors={['#A9333A', '#E1578A', '#FAE98F']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.sliderContainer}>
            <AppIntroSlider
              data={slides}
              renderItem={renderItem}
              onDone={handleGetStarted}
              showNextButton={false}
              showDoneButton={false}
              dotStyle={styles.dotStyle} // Customize the style of inactive dots
              activeDotStyle={styles.activeDotStyle}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>בואו נתחיל!</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 550,
  },
  item: {
    // flex: 1,
    // backgroundColor: item.backgroundColor,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingBottom: 100,
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  introImageStyle: {
    width: 400,
    height: 351,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    top: 550,
    left: 117,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 30,
    width: 160,
    height: 45,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  activeDotStyle: {
    backgroundColor: 'rgb(236, 96, 5)',
  },
});

const slides = [
  {
    key: 's1',
    title: 'ברוכים הבאים',
    text: 'ברוכים הבאים לאפליקציית הרכב החדשה והמתקדמת של אמדוקס.\n\nכאן תוכלו לקבל את כל השירותים, המידע והכלים שיאפשרו לכם לנסוע בראש שקט.',
    image: require('./icons/hand_wave.png'),
  },
  {
    key: 's2',
    title: 'מזמינים תור בקליק',
    text: 'מהיום תוכלו להזמין תור למרכזי השירות במהירות ובקלות ישירות מהאפליקציה.\n\nפשוט נכנסים מתאמים ומגיעים.',
    image: require('./icons/calendar.png'),
  },
  {
    key: 's3',
    title: 'בכל מקום ובכל שעה',
    text: 'אנחנו כאן עבורך 24/7 בכל תקלה שתפגוש בדרך. נעניק סיוע והכוונה אפילו אם רק נדלקה נורית חיווי.',
    image: require('./icons/location.png'),
  },
  {
    key: 's4',
    title: 'צריכים רכב לכמה ימים?',
    text: 'מהיום ניתן להשאיל רכב ישירות דרך האפליקציה.\n\nפשוט נכנסים בוחרים ונוסעים.',
    image: require('./icons/taxi.png'),
  },
  {
    key: 's5',
    title: 'יותר מאובטח יותר פרטי!',
    text: 'אנחנו עושים את כל המאמצים כדי לשמור עליך.\nהחזון שלנו הוא לתת לך שירות ללא מעקב או שימוש לא ראוי במידע שנמצא בידינו.',
    image: require('./icons/lock.png'),
  },
];

export default SliderWalkthrough;
