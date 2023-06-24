import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FirstCarDetails} from  './components/FirstCarDetails';
import { SecondCarDetails} from './components/SecondCarDetails';
import { Documents} from './components/documents';
import Data from '../../locals/data.json';
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

const App = () => {
    return(
        <SafeAreaView style={styles.Container}>
            <ScrollView>
            <LinearGradient colors={['#E4166D','#E1376C','#ED4E61']} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                <View>
                    <FirstCarDetails carInfo={Data}/>
                    <SecondCarDetails carInfo={Data}/>
                </View>        
                <View style={styles.Footer}>
                    <Documents carInfo={Data}/>
                </View> 
            </LinearGradient>
            </ScrollView>                
        </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    Container: {
        flex: 1,
        textAlign:'center',
    },
    Footer:{
        backgroundColor:"#fff",
        marginTop:40,
        paddingTop:15,
        paddingBottom:15,
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }

});

export default App;