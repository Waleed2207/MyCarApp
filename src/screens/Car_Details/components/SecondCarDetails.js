import {StyleSheet, Text, View, Image} from 'react-native';
import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';

export const SecondCarDetails = () => {
  return (
    <View style={styles.DetailsContainer}>
      <View>
        <Text>{translate('licensedDriver')[0]}</Text>
        <View>
          <Text>{translate('licensedDriver')[1]}</Text>
          <Image/> {/* icon for aviv sharon */}
        </View>
      </View>
      <View>
        {/* component fourViewsCarDetails, include car details */}
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
