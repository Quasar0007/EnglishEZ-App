import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logoHead from '../assets/red.jpg';
import volume from '../assets/Volume-Up.png';
import settings from '../assets/settings.png';

export default function Vid(props) {
    var size = styles.imgBg;
    var volSize = styles.smImgOne;
    var setSize = styles.smImg;
    if (props.display === "full"){
        size= styles.imgBgFull
        volSize = styles.smImgOneFull
        setSize = styles.smImgFull
    }
    if (props.display==="half"){
        size= styles.imgBgHalf
        volSize = styles.smImgOneHalf
        setSize = styles.smImgHalf

    }
    return (
        <ImageBackground source={logoHead} style={size}>
            <View style={styles.widgets}>
                <Image source={volume} style={volSize} />
                <Image source={settings} style={setSize} />
            </View>
            <View style={styles.translucent}>
                <Text style={styles.transText}>Alisha Jasani</Text>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    imgBg: {
        justifyContent: 'space-between',
        height: 160,
        width: 165,
        margin: 10,
        backgroundColor: '#FFF',
        elevation: 10,
        top: -40,
    },
    imgBgFull: {
        justifyContent: 'space-between',
        height: 395,
        width: 370,
        margin: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        top: -65,
    },
    imgBgHalf: {
        justifyContent: 'space-between',
        height: 197,
        width: 370,
        margin: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        top: -45,
    },
    smImg: {
        height: 30,
        width: 30,
        right: 10,
        top: 5,
    },
    smImgFull: {
        height: 45,
        width: 45,
        right: 20,
        top: 10,
    },
    smImgHalf: {
        height: 40,
        width: 40,
        right: 15,
        top: 8,
    },
    smImgOne: {
        height: 25,
        width: 25,
        left:10,
        top: 5,
    },
    smImgOneFull: {
        height: 35,
        width: 40,
        left:20,
        top: 10,
    },
    smImgOneHalf: {
        height: 30,
        width: 35,
        left:15,
        top: 8,
    },
    translucent:{
        bottom: 15,
        borderWidth: 1,
        marginHorizontal:'15%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    transText:{
        color: '#FFF',
    },
    widgets: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


})