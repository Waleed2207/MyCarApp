import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity
} from 'react-native';

export const AirPressureGuide = (props) => {
  return (
    <View style={styles.DetailsContainer}>
        <Image source={CarDetailsIcons.RepairCarIcon}/>
        <Text>{translate('airPressure')}</Text>
        <Text>
        .לחץ אוויר נקבע בהתאם למספר פרמטרים כגון סוג הצמיג, כמות אנשים שנמצאים ברכב, האם הרכב גורר משא, תנאי מזג אוויר, חנקן ועוד
        .באפליקציה תוכלו לראות את טווח לחץ האוויר המומלץ
        .לקבלת יעוץ פרטני בהתאם לצרכים יחודיים יש לפנות למחלקת הרכב
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
    DetailsContainer: {

    },
    button:{

    },
    buttonText:{

    }
});
