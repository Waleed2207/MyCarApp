
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useState} from 'react';

export default function RadioButtons({leftText , rightText, leftPress , rightPress}) {

    const [whoClicked, setWhoClicked] = useState("right")

    const leftPressState = () => {
        leftPress()
        setWhoClicked("left")
    }
    const rightPressState = () => {
        rightPress()
        setWhoClicked("right")
    }

    return (
        <View style={styles.wrapper}>
            <Pressable style={[styles.button, whoClicked === 'left' && styles.pressed]} onPress={leftPressState}>
                <Text style={[ styles.buttonText, whoClicked === 'left' && styles.whiteText]}>{leftText}</Text>
            </Pressable>

            <Pressable style={[styles.button, , whoClicked === 'right' && styles.pressed]} onPress={rightPressState}>
                <Text style={[ styles.buttonText,  whoClicked === 'right' && styles.whiteText]}>{rightText}</Text>
            </Pressable>    
           
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        marginVertical:10
    },
    pressed : {
        backgroundColor: '#DF6665',
        borderWidth:0
    },
    whiteText:{
        color:'white'
    },
    button:{
        flex: 1,
        height:50,
        borderWidth:1,
        borderRadius:150,
        marginHorizontal:5,
        justifyContent:'center',
        alignItems:'center',  
        borderColor:'#E6E5E9',
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
    }

    
})