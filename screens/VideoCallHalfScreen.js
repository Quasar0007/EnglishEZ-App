import React from 'react';
import { StyleSheet, View } from 'react-native';
import Vid from '../components/Vid';
import HeaderVideoCall from '../components/HeaderVideoCall';
import FooterVideoCall from '../components/FooterVideoCall';

export default function VideoCallHalfScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderVideoCall/>
            </View>
            <View style={styles.second}>
                <Vid display="half"/>
                <Vid display="half"/>
            </View>
            <View style={styles.foot}>
                <FooterVideoCall nav={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    first: {
        flex: 3,
    },
    second:{
        flex: 6,
        justifyContent: 'space-evenly'
    },
    foot:{
        flex: 1,
    }
})