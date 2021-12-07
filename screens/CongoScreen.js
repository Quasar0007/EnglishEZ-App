import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Congratulation from '../assets/Congratulation.png'
export default function CongoScreen({route, navigation}){
    const id = route.params.id;
    return(
        <View style={styles.container}>
            <View style={styles.imgView}>

                <Image source={Congratulation} style={styles.img}/>
            </View>
            <Text style={styles.congratsText}>Congratulation</Text>
            <Text style={styles.firstStep}>on taking the hardest step: The first Step</Text>
            <View  style={styles.foot}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuestionScreenOne', {identity: id})}>
                    <Text style={styles.next}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height: '33%',
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    congratsText:{
        flex: 1,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFF',
        paddingTop: 20,
    },
    container:{
        flex: 1,
        backgroundColor: '#5468FF',
        alignItems: 'center'
    },
    firstStep:{
        flex:1,
        textAlign: 'center',
        marginHorizontal: 50,
        fontSize: 25,
        top: 20,
        color: '#FFF',
        fontStyle: 'italic',
    },
    foot:{
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        bottom: 20,
    },
    img:{
        width: 180,
        height: 180,
    },
    imgView:{
        flex:5,
        height: 10,
        width: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    next:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5468FF'
    }

})