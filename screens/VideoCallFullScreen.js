import React from 'react';
import { StyleSheet, View } from 'react-native';
import Vid from '../components/Vid';
import HeaderVideoCall from '../components/HeaderVideoCall';
import FooterVideoCall from '../components/FooterVideoCall';

export default function VideoCallFullScreen({navigation}){
    setTimeout(() =>{
        navigation.replace('VideoCallHalfScreen')
      }, 3000)
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderVideoCall/>
            </View>
            <View style={styles.second}>
                <Vid display="full"/>
            </View>
            <View style={styles.foot}>
                <FooterVideoCall/>
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
    },
    foot:{
        flex: 1,
    }
})