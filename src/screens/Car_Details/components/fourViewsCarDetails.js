import {StyleSheet, Text, View, Image} from 'react-native';
import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';

export const fourViewsCarDetails = () => {
  return (
    <View style={styles.DetailsContainer}>
        <View>
            <View>
                <Image source={CarDetailsIcons.RepairCarIcon}/>
                <Text>{translate('treatmentInterval')[0]}</Text>
                <Text>{translate('treatmentInterval')[1]}</Text>
            </View>
            <View>
                <Image source={CarDetailsIcons.RoutineCarIcon}/>
                <Text>{translate('GettingOnRoad')[0]}</Text>
                <Text>{translate('GettingOnRoad')[1]}</Text>
            </View>
            <View>
                <Image source={CarDetailsIcons.TiresDownCarIcons}/>
                <Text>{translate('TiresDown')[0]}</Text>
                <Text>{translate('TiresDown')[1]}</Text>
            </View>
            <View>
                <Image source={CarDetailsIcons.TiresUpCarIcons}/>
                <Text>{translate('TiresUp')[0]}</Text>
                <Text>{translate('TiresUp')[1]}</Text>
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
