import {StyleSheet, Text, View, Image} from 'react-native';
import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';

export const FirstCarDetails = () => {

  const onPressExit = () => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login');
      // setIsAuthorized(true);
    }, 3000);
  };

  return (
    <View style={styles.DetailsContainer}>
        <View>
          <Button onPressExit={onPressExit} >{/* Exit page */}
            <Image source={CarDetailsIcons.ExitPageIcons}/>
          </Button>
          <View>
            <Text>{translate('carDetails')}</Text>
            <Image source={CarDetailsIcons.CarIcon}/>
            <Text>{translate('carType')}</Text>
          </View>
          <View>
            <View>
              <Image source={CarDetailsIcons.ColorCarIcon}/>
              <Text>{translate('carType')[0]}</Text>
              <Text>{translate('carType')[1]}</Text>
            </View>
            <View>
            <Image source={CarDetailsIcons.NumberCarIcon}/>
              <Text>{translate('carNumber')[0]}</Text>
              <Text>{translate('carNumber')[1]}</Text>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    DetailsContainer: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
