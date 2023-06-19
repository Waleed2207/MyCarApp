import {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {accidentReport} from '../../../uiKit/icons';
import Form from './Form';
import HelpModal from './HelpModal';
import ImportantNote from './ImportantNote';

export default AccidentReportScreen = () => {
  const [formOpen, setFormOpen] = useState(false);

  const reportAccident = () => {
    console.log('report accident');
    setFormOpen(true);
  };
  const reportDamage = () => {
    console.log('report damage');
  };

  return (
    <SafeAreaView>
      {formOpen ? (
        <Form></Form>
      ) : (
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
              <HelpModal></HelpModal>

              <Text style={[styles.whiteText, styles.textHeaderFirst]}>
                דיווח תאונה
              </Text>
              <Pressable>
                <Image
                  style={styles.exitImage}
                  source={accidentReport.exitBtn}></Image>
              </Pressable>
            </View>
            <Image
              style={styles.bgImage}
              source={accidentReport.backgroundImage}></Image>
          </View>
          <View style={styles.contentBody}>
            <Text style={styles.header}>דגשים חשובים למקרי תאונה</Text>
            <View style={styles.listContainer}>
              {accidentReport &&
                accidentReport.listIcons.map(note => {
                  return (
                    <ImportantNote
                      key={note.icon}
                      text={note.text}
                      image={note.icon}></ImportantNote>
                  );
                })}
            </View>
            <View style={styles.message}>
              <View style={styles.yellowBg}>
                <Image
                  style={styles.messageImg}
                  source={accidentReport.message}></Image>
              </View>
              <View style={styles.messageText}>
                <Text style={styles.subHeader}>לפני מילוי הדוח חשוב לדעת:</Text>
                <View style={styles.innerMessageContainer}>
                  <Text style={styles.text}>
                    דוח תאונת הדרכים נשלח למספר גורמים בקבוצת אמדוקס ולגורמים
                    חיצוניים כמו חברת הביטוח.
                  </Text>
                  <Text style={styles.text}>
                    נא להקפיד על מילוי מדוייק ונכון של דוח התאונה.
                  </Text>
                  <Text style={styles.text}>
                    ניתן לקבל עזרה טלפונית בלחיצה על כפתור ה"עזרה" בראש המסך.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.actionsContainer}>
              <Text style={styles.header}>אנא בחרו את סוג האירוע</Text>
              <LinearGradient
                style={[styles.submitButtonOuter, styles.actionButton]}
                colors={['#E60473', '#F05864']}
                // top left is the start point, top right is the end point
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Pressable
                  style={[styles.actionButtonInner, styles.gradiantBg]}
                  onPress={reportAccident}>
                  <Text style={styles.whiteTextSmall}>
                    תאונת דרכים עם צד ג׳
                  </Text>
                </Pressable>
              </LinearGradient>
              <Pressable
                style={[styles.actionButton, styles.actionButtonBoder]}
                onPress={reportDamage}>
                <Text> דיווח נזק לרכב </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    paddingVertical: 10,
    position: 'absolute',
    top: 10,
    left: 0,
    paddingHorizontal: 20,
  },
  headerTextContainer: {
    flex: 4,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },
  textHeaderFirst: {
    marginTop: 8,
  },
  topContainer: {
    height: Dimensions.get('window').height * 0.3,
    position: 'relative',
    marginBottom: -25,
  },
  listContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 16,
    marginBottom: 36,
  },
  helpButton: {
    backgroundColor: 'pink',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBody: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  exitImage: {
    width: 38,
    height: 38,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    zIndex: -100,
  },
  message: {
    backgroundColor: '#FFFBEA',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row-reverse',
    gap: 10,
    marginBottom: 20,
    marginHorizontal: 18,
  },
  yellowBg: {
    backgroundColor: '#EECA51',
    borderRadius: 100,
    padding: 12.5,
    marginBottom: 'auto',
  },
  messageImg: {
    height: 32,
    width: 32,
  },
  messageText: {
    alignItems: 'flex-end',
    padding: 8,
  },
  innerMessageContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  text: {
    textAlign: 'right',
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  actionButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 100,
    width: '100%',
  },
  actionButtonBoder: {
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  submitButtonOuter: {
    paddingVertical: 15,
    borderRadius: 10,
    useAngle: true,
    angle: 45,
    angleCenter: {x: 0.5, y: 0.2},
  },
  actionButtonInner: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradiantBg: {
    // backgroundColor: '#D22F72',
    color: 'white',
    borderColor: 'white',
  },
  whiteTextSmall: {
    color: 'white',
    fontSize: 16,
  },
  whiteText: {
    color: 'white',
    fontSize: 18,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
