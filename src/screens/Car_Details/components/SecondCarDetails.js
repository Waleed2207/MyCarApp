import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';
import {Service} from './Service';
import {
  StyleSheet,
  Text, 
  View, 
  Image, 
  ScrollView
} from 'react-native';

// M1b component, with compnent for(מרווח טיפולים, עליה לביש ,לחץ אוויר קדמי, לחץ אוויר אחורי)
export const SecondCarDetails = ({carInfo}) => {
  
  //composition specific data from carInfo, send this data with a default text from he.json, get icons for every service from {translate}
    const data = [
      {
        icons: '../../../assets/icons/CarDetailsIcons/repair.png',
        defualtText: translate('treatmentInterval'),
        dynamicText: carInfo.treatmentInterval
      },
      {
        icons: '../../../assets/icons/CarDetailsIcons/repair.png',
        defualtText: translate('gettingOnRoad'),
        dynamicText: carInfo.gettingOnRoad
      },
      {
        icons: CarDetailsIcons.TiresUpCarIcons,
        defualtText: translate('tiresUp'),
        dynamicText: carInfo.tiresUp
      },
      {
        icons: CarDetailsIcons.TiresDownCarIcons,
        defualtText: translate('tiresDown'),
        dynamicText: carInfo.tiresDown
      }
    ]

    return (
      
      <View style={styles.Container}>

      {/* make loop for a data(props) called carInfo inside ScrollView, only taked licensed drivers from a data */}
        <View style={styles.navBar}>
          <Text style={styles.Text}>{translate('licensedDriver')}</Text>
          <ScrollView horizontal={true}>
          {carInfo.licensedDriver.map((driver, index) => (
            <View style={styles.CarPepoles} key={index}>
              <Text style={styles.Text}>{driver}</Text>
              <Image style={styles.ImageProfile} source={CarDetailsIcons.CarIcon} />
            </View>
          ))}
          </ScrollView>
        </View>
        
        {/* composition specific data and send it to another component called Service to make dynamic services section */}
        <View>
          <Service data={data} />
        </View>

      </View>
    );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection:'column',
    color:'white',
  },
  navBar:{
    flexDirection:'row-reverse',
    justifyContent:'space-around',
    alignItems:'center',
    width:'95%',
    height:50,
    margin:10,
    padding:5,
  },
  ImageProfile:{
    width:35,
    height:35,
    borderRadius:50,
    borderColor:'white',
    backgroundColor:'white',
    borderWidth:1,
    marginLeft:4,
  },  
  CarPepoles: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'rgba(246, 232, 232, 0.5)',
    padding:3,
    marginRight:5,
    borderRadius:50,
    height:40,
    width:130,
  },
  Text:{
    color:'white',
  }
});
