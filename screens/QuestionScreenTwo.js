import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearProgress } from 'react-native-elements';

import back from '../assets/back.png';


export default function QuestionScreenTwo({route,navigation}){
    var ident = route.params.iden;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.questionHead}>
                <View style={styles.questionHeadTwo}>
                    <Image source={back} style={styles.img} />
                    <Text style={styles.profileText}>Let's serve you better</Text>
                </View>
                <LinearProgress color="#FFC350" variant="determinate" value={0.7} style={styles.progress}/>
            </TouchableOpacity>
            <View style={styles.rateBox}>
                <Text style={styles.rateText}>Rate yourself on speaking</Text>
                <View style={styles.level}>
                    <TouchableOpacity style={styles.btnBeg}>
                        <Text style={styles.textBeg}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInt}>
                        <Text style={styles.textInt}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdv}>
                        <Text style={styles.textInt}>Advanced</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rateBox}>
                <Text style={styles.rateText}>Rate yourself on writing</Text>
                <View style={styles.level}>
                    <TouchableOpacity style={styles.btnBeg}>
                        <Text style={styles.textBeg}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInt}>
                        <Text style={styles.textInt}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdv}>
                        <Text style={styles.textInt}>Advanced</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rateBox}>
                <Text style={styles.rateText}>Rate yourself on listening</Text>
                <View style={styles.level}>
                    <TouchableOpacity style={styles.btnBeg}>
                        <Text style={styles.textBeg}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInt}>
                        <Text style={styles.textInt}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdv}>
                        <Text style={styles.textInt}>Advanced</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rateBox}>
                <Text style={styles.rateText}>Rate yourself on reading</Text>
                <View style={styles.level}>
                    <TouchableOpacity style={styles.btnBeg}>
                        <Text style={styles.textBeg}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInt}>
                        <Text style={styles.textInt}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdv}>
                        <Text style={styles.textInt}>Advanced</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.appButtonContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('HomeScreen', {final: ident})}>
                    <Text style={styles.appButtonText}>NEXT QUESTION</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    appButtonContainer:{
        flex: 2.1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',


    },
    appButtonText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btn:{        
        backgroundColor: "#5468FF",
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    btnBeg:{
        backgroundColor: "#5468FF",   
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#DFE9F1',
        paddingHorizontal: 10,
    },
    btnInt:{
        backgroundColor: '#FFF',
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderWidth:1,
        borderColor: '#DFE9F1',

    },
    btnAdv:{
        backgroundColor: '#FFF',
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderWidth:1,
        borderColor: '#DFE9F1',


    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    img:{
        height: 40,
        width: 40,
        marginRight: 30,
        marginLeft: 20,
    },
    level:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileText:{
        fontSize: 24,
        color: '#FFFFFF',
    },
    progress:{
        color: '#FFC350',
        width: '90%',
        marginLeft: 20,
        // marginRight: 20,
        top: -20,
    },
    questionHead: {
        flex: 2,
    },
    questionHeadTwo: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    rateBox:{
        flex: 1.6,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        elevation: 10,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,

    },
    rateText:{
        fontSize: 20,
        color: '#07051B',
    },
    textBeg:{
        color: '#FFF',
    },
    textInt:{
        color: '#9FB5C6',
    }
    
    
})