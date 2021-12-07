import React from 'react';
import { Touchable } from 'react-native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import GroupCallScreen from './GroupCallScreen';

export default function GroupCallScreenUpdate({navigation}){
    return(
        <View style={styles.cont}>
            <GroupCallScreen hideChat="true" nav={navigation}/>
            <TouchableOpacity style={styles.appBtn} onPress={() => navigation.navigate('UserScreen')}>
                <Text style={styles.btnText}>CLOSE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    appBtn:{
        marginHorizontal: 20,
        backgroundColor: '#5468FF',
        elevation: 2,
        borderRadius: 7,
        bottom: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    cont:{
        flex: 1
    }
})