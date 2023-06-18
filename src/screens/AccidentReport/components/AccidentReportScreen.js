import {useState} from 'react';
import {accidentReport} from '../../../uiKit/icons';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import ImportantNote from './ImportantNote';
import HelpModal from './HelpModal';
import Form from './Form';
import { ScrollView } from 'react-native-gesture-handler';


export default AccidentReportScreen = () => {

    const [formOpen, setFormOpen] = useState(false); 

    const reportAccident = ()=> {
        console.log('report accident')
        setFormOpen(true)
    }
    const reportDamage = ()=> {
        console.log('report damage')
    }

    return (
        <SafeAreaView>


{formOpen ? <Form></Form> :
             <ScrollView>

         

        <View style={styles.topContainer}>
                <View style={styles.headerContainer}>
                    <HelpModal></HelpModal>
                    
                    <Text style={styles.whiteText}> דיווח תאונה</Text>
                    <Pressable >
                       <Image style={styles.exitImage} source={accidentReport.exitBtn}></Image>
                    </Pressable>
                </View>
                <Image style={styles.bgImage} source={accidentReport.backgroundImage}></Image>
        </View>  
        <View style={styles.contentBody}>
            <Text style={styles.header}>דגשים חשובים למקרי תאונה </Text>
            <View style={styles.listContainer}>
                { accidentReport &&
                    accidentReport.listIcons.map((note) => {
                        return <ImportantNote text={note.text} image={note.icon}></ImportantNote>
                    })
                }
            </View>
            <View style={styles.message}>
                <View style={styles.yellowBg} >
                    <Image style={styles.messageImg} source={accidentReport.message}></Image>
                </View>
                <View style={styles.messageText}>
                    <Text style={styles.subHeader}>
                        לפני מילוי הדוח חשוב לדעת:
                    </Text>
                    <Text style={styles.text}> 
                        דוח תאונת הדרכים נשלח למספר גורמים בקבוצת אמדוקס ולגורמים חיצוניים כמו חברות ביטוח. 
                        נא להקפיד על מילוי מדוייק ונכון של דוח התאונה 

                        ניתן לקבל עזרה טלפונית בלחיצה על כפתור ״עזרה״ בראש המסך
                    </Text>
                </View>
                
            </View>
            <View style={styles.actionsContainer}>
                <Text style={styles.header}>
                    אנא בחרו את סוג האירוע
                </Text>
                <Pressable style={[styles.actionButton, styles.gradiantBg]} onPress={reportAccident}>
                    <Text style={styles.whiteText}> תאונת דרכים עם צד ג׳</Text>
                </Pressable>
                <Pressable style={[styles.actionButton]} onPress={reportDamage}>
                    <Text> דיווח נזק לרכב </Text>
                </Pressable>
            </View>
        </View>
            
            </ScrollView>
            }
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    headerContainer: {  
        width: '100%',              
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 2,
        shadowColor: '#000',
        paddingVertical:10,
        position: 'absolute',
        top:20,
        left:0,
      
    },
    headerTextContainer: {
        flex: 4,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
       
      
    },
    header:{
        fontWeight:'bold',
        fontSize:24,
        alignSelf:'flex-end',
        marginBottom:30
        
    },
    topContainer: {
        height: (Dimensions.get('window').height) * 0.3,
        position: 'relative',
        marginBottom: -25,
        
    },
    listContainer:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap:20,
    },
    helpButton: {
        backgroundColor:'pink',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBody: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical:40,
        paddingHorizontal:40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
       
    },
    exitImage:{
        width: 40,
        height: 40,
    },
    helpBtn: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:3,
        borderRadius: 20,
        backgroundColor:'#DF6666',
        padding: 4,
        paddingHorizontal:8

       
    },
    bgImage: {
        height: '100%',
        width:'100%',
        zIndex:-100
    },
    message:{
        backgroundColor:'#FFFBEA',
        padding:15,
        borderRadius:10,
        flexDirection:'row-reverse',
        gap:10,
        marginBottom:20
    },
    yellowBg:{
        backgroundColor:'#EECA51',
        borderRadius:100,
        padding:12.5,
        marginBottom:'auto'
    },
    messageImg:{
        height:32,
        width:32,
        
    },
    messageText:{
        alignItems:'flex-end',
        padding:2
    },
    text:{
        textAlign:'right',
    },
    subHeader:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:5
    },
    actionButton:{
        borderWidth:1,
        borderColor:'lightgrey',
        paddingVertical:15,
        alignItems:'center',
        marginVertical:5,
        borderRadius:100,
        width:'100%'
    },
    gradiantBg:{
        backgroundColor:'#D22F72',
        color:'white',
        borderColor: 'white'
    },
    whiteText:{
        color:'white'
    },
    actionsContainer:{

        width:'100%',
        alignItems:'center'
    }
})