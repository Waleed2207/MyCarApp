import {StyleSheet, Text, View, Image} from 'react-native';
import {CarDetailsIcons} from '../../../uiKit/icons';

export const CarDetails = () => {
  return (
    <View style={styles.DetailsContainer}>
        <View>
            <Text></Text>
            <Image source={CarDetailsIcons.CarIcon}/>
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
