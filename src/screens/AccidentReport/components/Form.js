import {useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PhotosGallery} from './PhotosGallery';
import RadioButtons from './RadioButtons';
import Signiture from './Signiture';
import {FormSection, FormWizard, WizardSection} from './Wizard';
import LinearGradient from 'react-native-linear-gradient';


export default function Form() {
  const [formData, setFormData] = useState(null);

  const setDate = data => {
    setFormData({...formData, date: data});
  };

  const setTime = data => {
    setFormData({...formData, time: data});
  };

  const setLocation = data => {
    setFormData({...formData, location: data});
  };

  const setHouseNumber = data => {
    setFormData({...formData, houseNumber: data});
  };

  const setAddress = data => {
    setFormData({...formData, address: data});
  };

  const setDetails = data => {
    setFormData({...formData, details: data});
  };

  const setPoliceTrue = () => {
    setFormData({...formData, police: true});
  };

  const setPoliceFalse = () => {
    setFormData({...formData, police: false});
  };

  const saveSigniture = data => {
    setFormData({...formData, signiture: data});
  };

  const onSubmit = () => {
    console.log(formData);
    setFormData(null)

  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <ScrollView>
      <FormWizard>
        <WizardSection>
          <View style={styles.wrapper}>
            <Text style={styles.header}>פרטים כלליים</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={date => setDate(date)}
                style={styles.Input}
                placeholder="תאריך האירוע"></TextInput>
              <TextInput
                onChangeText={time => setTime(time)}
                style={styles.Input}
                placeholder="שעת האירוע"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="עיר / כביש מרכזי"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={[styles.Input]}
                placeholder="מ. בית"></TextInput>
              <TextInput
                style={[styles.Input, {flex: 3}]}
                placeholder="כתובת"></TextInput>
            </View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaLabel}> פרטי האירוע</Text>
              <TextInput style={styles.textArea} multiline={true}>
                {' '}
              </TextInput>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.header}>הוספת תמונות מהאירוע</Text>
            {/* <View style={styles.photoGalleryPlaceholder}> */}
            <PhotosGallery></PhotosGallery>
            {/* </View> */}
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.header}> האם הייתה מעורבות משטרה באירוע?</Text>
            <RadioButtons
              rightText={'כן, היתה'}
              leftText={'לא היתה'}
              rightPress={setPoliceTrue}
              leftPress={setPoliceFalse}></RadioButtons>
            <Text style={styles.header}>פרטי המשטרה</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={styles.Input}
                placeholder="תחנת משטרה"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={styles.Input}
                placeholder="שם השוטר"></TextInput>
            </View>
          </View>
        </WizardSection>
        <WizardSection>
          <View style={styles.wrapper}>
            <Text style={styles.header}>מי נהג ברכב בזמן האירוע? </Text>
            <RadioButtons
              leftText={'נהג/ת אחר/ת'}
              rightText={'אני נהגתי'}></RadioButtons>
            <Text style={styles.header}> פרטי הנהג/ת</Text>
          </View>
        </WizardSection>
        <WizardSection>
          <View style={styles.wrapper}>
            <Text> Third Page</Text>
          </View>
        </WizardSection>
        <WizardSection>
          <View style={styles.wrapper}>
            <Text> Fourth Page</Text>
          </View>
        </WizardSection>
        <WizardSection>
          <View style={styles.wrapper}>
            

            
            <Text> שליחת דוח</Text>
            <TextInput
                style={styles.Input}
                placeholder="כתובת המייל שלי">
            </TextInput>
            <Text> חתימה</Text>
            <Text> אני מאשר שכל המידע שמסרתי הוא מדויק</Text>
            <Signiture onOK={saveSigniture}></Signiture>
            
            <View style={styles.wrapper}> 
            <View style={styles.wrapper}>
            <Text>
                     המלצה
                </Text>
                <Text>
                    לאחר קבלת המסמך במייל אנחנו ממליצים להעביר אותו כפי שהוא לחברת הביטוח.
                </Text>
            </View>
               
                <LinearGradient
                style={[styles.submit]}
                colors={['#E60473', '#F05864']}
                // top left is the start point, top right is the end point
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Pressable onPress={onSubmit} >
                    <Text style={styles.colorWhite}>
                        אישור ושליחה
                    </Text>
                </Pressable>
                </LinearGradient>
            </View>

        
          </View>
        </WizardSection>
      </FormWizard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  inputWrppaer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  Input: {
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'right',
    flex: 1,
    margin: 3,
    height: 60,
    padding: 5,
  },
  textArea: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 4,
    textAlign: 'right',
  },
  textAreaContainer: {
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderColor: '#E6E5E9',
    position: 'relative',
    marginVertical: 10,
  },
  textAreaLabel: {
    position: 'absolute',
    left: 10,
    top: -14,
    zIndex: 100,
  },
  photoGalleryPlaceholder: {
    width: '100%',
    height: 200,
    borderWidth: 1,
  },
  header: {
    marginTop: 10,
  },
  submit:{
        borderRadius:50,
        padding:15,
        justifyContent:'center',
        alignItems:'center', 
        width:'100%',
          
  },
  colorWhite:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  }
});
