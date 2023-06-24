import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';
import {
    StyleSheet, 
    Text, 
    View, 
    Image,
    ScrollView
} from 'react-native';

export const Documents = ({carInfo}) => {

  return (
    <View style={styles.DetailsContainer}>

        {/* first section of document part*/}
        <View style={styles.Document}>
            <Text style={styles.BoldText}>מסמכים</Text>
            <View style={styles.ShareDocumentBtn}>
                <Text style={styles.shareText}>שיתוף מסמכים</Text>
                <Image style={styles.Image} source={CarDetailsIcons.ShreIcon}/>    
            </View>
        </View>

        <View style={styles.Document}>
            <View style={styles.ImageBorder}>
                <Image style={styles.ImageDocument} source={CarDetailsIcons.DocumentIcon}/>
            </View>
            <View>
                <Text style={styles.BoldText}>{translate('carLicense')}</Text>
                <Text style={styles.Text}>עודכן 24.06.2020</Text>
            </View>
            <Image style={styles.Image} source={CarDetailsIcons.CheckIcon}/>
        </View>

        <View style={styles.Document}>
            <View style={styles.ImageBorder}>
                <Image style={styles.ImageDocument} source={CarDetailsIcons.DocumentIcon}/>
            </View>
            <View>
                <Text style={styles.BoldText}>צילום ספח ביטוח</Text>
                <Text style={styles.Text}>הוסף צילום</Text>
            </View>
            <View style={styles.BorderImage}>
                <Image style={styles.Image} source={CarDetailsIcons.PlusIcon}/>
            </View>
        </View>

        {/* Vertical line between 2 section in document part*/}
        <View style={styles.lineVertical}></View>

        {/* get all the instructions message from carInfo, mapping the instructionsMSG to put every message inside View with 2 images(light,info)*/}
        {/* View for all the second section in document part*/}
        <View> 
            <Text style={styles.BoldText}>מידע שימוש</Text>
            <Text style={styles.Text}>לנוחיותך איגדנו מספר מדריכים לתפעול הרכב</Text>
            <ScrollView horizontal={true}>
                <View style={styles.AllInformation}>
                    {carInfo.instructionsMSG.map((message, index) => (
                        <View style={styles.Information}>
                            <Image style={styles.infoIcons} source={CarDetailsIcons.Infocon} />
                            <Image style={styles.LightIcons} source={CarDetailsIcons.LightIcon} />
                            <Text style={styles.Text}> {translate('instructions')}  </Text>
                            <Text style={styles.BoldText}>{message}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    DetailsContainer: {
        flex:1,
        width:'90%',
    },
    ShareDocumentBtn:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'#1961e6',
        width:140,
        height:30,
        borderRadius:50
    },
    shareText:{
        color:'white'
    },
    Document:{
        flexDirection:"row-reverse",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 10,
    },
    ImageDocument:{
        height:35,
        width:35,
    },
    BorderImage:{
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'#f5dce3',
    },
    ImageBorder:{
        height:50,
        width:50,
        borderColor:'black',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    Image:{
        height:20,
        width:20
    },
    Text:{
        fontSize:12,
        color:'black'
    },
    BoldText:{
        fontWeight:'bold',
        color:'black'
    },
    lineVertical: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 2,
        marginVertical: 10,
        marginTop:20,
        marginBottom:20
    },
    AllInformation:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginTop:15,
    },
    Information:{
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:'#FFC107',
        borderRadius:10,
        margin:2
    },
    infoIcons:{
        position:'absolute',
        top:10,
        right:23,
        width:15,
        height:15
    },
    LightIcons:{
        width:40,
        height:40
    }
});
