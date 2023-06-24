import { useEffect, useState } from 'react';
import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export const FirstCarDetails = ({carInfo}) => {

  // get all the data and taked only some data what used here (type, color, number)
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState("");

  // set the data in useState function 
  useEffect(() => {
    setType(carInfo.carType);
    setColor(carInfo.carColor);
    setNumber(carInfo.carNumber);
  }, []);

  return (
    <View style={styles.Container}>

      {/* header of Car Info (car type, car color, car number) */}
      <View style={styles.Header}>
        <View style={styles.firstSection}>
          <Text style={styles.defaultText}>{translate('carDetails')}</Text>
          <Image style={styles.exitBtn} source={CarDetailsIcons.ExitPageIcons}/> 
        </View>
        <Image style={styles.ImageCar}  source={CarDetailsIcons.CarIcon}/>
        <Text style={styles.carTypeText}>{type}</Text>
      </View>

      {/* section of car color */}
      <View style={styles.CarInformation}>
        <View style={styles.viewInfo}>
          <Image style={styles.ImageIcons}  source={CarDetailsIcons.ColorCarIcon}/>
          <Text style={styles.defaultText}>{translate('carColor')}</Text>
          <Text style={styles.dynamicText}>{color}</Text>
        </View>

        {/* Horizontal line between two sections (car color, car number) */}
        <View style={styles.lineHorizontal}></View>

        {/* section of car number */}
        <View style={styles.viewInfo}>
          <Image style={styles.ImageIcons}  source={CarDetailsIcons.NumberCarIcon}/>
          <Text style={styles.defaultText}>{translate('carNumber')}</Text>
          <Text style={styles.dynamicText}>{number}</Text>
        </View>
      </View>

      {/* Vertical line under 2 section  (car color, car number) */}
      <View style={styles.lineVertical}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection:"column",
    alignItems:'center',
    padding:10
  },
  Header:{
    flexDirection:"column",
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    height:200,
  },
  firstSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'flex-end',
    alignItems:'center',
    width:'55%',
    marginBottom:10,
  },
  exitBtn:{
    height:25,
    width:25
  },
  CarInformation: {
    flexDirection:"row",
    justifyContent:'space-around',
    width:'80%',
    marginTop:30,
  },
  viewInfo:{
    alignItems:'center',
    justifyContent:'space-evenly',
    width: 100,
    height:70,
  },
  ImageCar: {
    height:100,
    width:100
  },
  ImageIcons: {
    height:20,
    width:20
  },
  defaultText:{
    color: 'white',
    fontSize:12
  },
  dynamicText:{
    color: 'white',
    fontSize:14,
    fontWeight:'bold'
  },
  carTypeText:{
    color: 'white',
    fontSize:24,
  },
  lineHorizontal: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 1,
    height: 70,
    marginHorizontal: 10,
  },
  lineVertical: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '90%',
    height: 1,
    marginVertical: 10,
  },
});
