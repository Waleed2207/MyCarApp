import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import TextBox from '../components/TextBox';
import ChargerImage from '../components/ChargerImage';
import ItemWithIcon from '../components/ItemWithIcon';
import CustomButton from '../components/CustomButton';

const SummaryPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headline}>עמדת טעינה</Text>
            <TextBox isSummaryPage={true} style={styles.textBox}>
              <Text>לפניכם פרטי הקריאה אנא בדקו שכל הפרטים נכונים לפני השליחה.</Text>
            </TextBox>
            <View style={styles.imageContainer}>
              <ChargerImage isSummaryPage={true} text="עמדת טעינה" />
              <Text style={styles.secondaryHeadlineRight}>תיאור / הערות</Text>
              <Text style={styles.secondaryText}>
                יש בעיה עם עמדת טעינה מספר 3. כשמנסים להטעין העמדה לא מתחילה להטעין ורושמת שדרוש טיפול
              </Text>
              <Text style={styles.anotherHeadline}>תמונות</Text>
              <View style={styles.imagesContainer}>
                <Image source={require('../assets/icons/fuel.png')} style={styles.image} />
                <Image source={require('../assets/icons/fuel2.png')} style={styles.image} />
              </View>
              <View style={styles.line} />
              <Text style={styles.thirdHeadlineRight}>פרטים כללים</Text>
              <ItemWithIcon
                imageSource={require('../assets/icons/car.png')}
                text1="Tesla Model 3"
                text2="23 441 23"
              />
              <ItemWithIcon
                imageSource={require('../assets/icons/position.png')}
                text1="מיקום"
                text2="עמדת טעינה בשער המערבי"           
              />
              <View style={styles.newSectionBackground}>
                <Image source={require('../assets/icons/mark.png')} style={styles.newSectionImage} />
                <View style={styles.newSectionContent}>
                  <Text style={styles.newSectionHeadline}>לידיעך</Text>
                  <Text style={styles.newSectionText}>
                    ניתן להתעדכן בכל רגע נתון בסטטוס הבקשה שלך ישירות מהאפליקציה דרך מסך סטטוס הקריאות שלי.
                  </Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton text="אישור ושליחה" onPress={openModal} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeadline}>תודה</Text>
            <Text style={styles.modalText}>קריאה נשלחה בהצלחה!</Text>
            <CustomButton text="צפיה בסטטוס הקריאה" onPress={closeModal} />
            <Text style={styles.modalLink}>אישור</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  headerContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  textBox: {
    alignSelf: 'flex-end',
  },
  imageContainer: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  secondaryHeadlineRight: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  secondaryText: {
    color: 'gray',
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
  anotherHeadline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 8,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    marginTop: 30,
    marginLeft: -16,
    marginRight: -16,
  },
  thirdHeadlineRight: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  newSectionBackground: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#FFE37F',
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
  },
  newSectionImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: '#FFD700',
    borderRadius: 100,
  },
  newSectionContent: {
    flex: 1,
  },
  newSectionHeadline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    textAlign: 'right',
    marginRight: 15,
  },
  newSectionText: {
    color: 'gray',
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: 'right',
    marginRight: 15,
  },
  buttonContainer: {
    marginTop: 25,
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeadline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black',
    textAlign: 'center',
  },
  modalLink: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SummaryPage;
