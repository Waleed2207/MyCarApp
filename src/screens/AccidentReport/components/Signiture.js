import {useRef} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas'

 const Signiture = ({text, onOK}) => {
    const ref = useRef();
    console.log({onOK})
  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
  
    ref.current.readSignature();
    console.log("handleEnd")
   
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    //console.log(data);
  };

  return (
    <View style={styles.container}>
            <Pressable style={styles.clearButton} onPress={() => ref.current.clearSignature()}>
                 <Text style={styles.textSign}>נקה/י</Text>
            </Pressable>
   
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onGetData={handleData}
      autoClear={false}
      descriptionText={text}
      confirmText="Save"
      clearText='נקה/י'
    />
     </View>
  );
}


const styles = StyleSheet.create({
    container: {
        borderWidth:1, 
        width:'100%',
        height:300,
        borderColor:'lightgray',
        borderRadius:10,
        overflow:'hidden',
        position:'relative',
        marginVertical:10,
    },
    clearButton:{
        position:'absolute',
        top:15,
        left:15,
        zIndex:1,
    },
    row: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
      },
      textSign: {
        color: '#F05864',
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 5,

      },
      text: {
        color: '#fff',
        fontWeight: '900',
      },
      textInput: {
        paddingVertical: 10,
        textAlign: 'center'
      },
      setButton: {
        backgroundColor: 'deepskyblue',
        textAlign: 'center',
        fontWeight: '900',
        color: '#fff',
        marginHorizontal: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
      }
    });

    export default Signiture;