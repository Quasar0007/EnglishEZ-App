import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Invite from '../assets/Invite-Friends.png';


export default function AnimationEarning() {
    return (
        <View style={styles.cardFour}>
            <ImageBackground source={Invite} style={styles.bgFocus} >
                <Text style={styles.bgText}>Animation for earning 1 point for showing up today</Text>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    cardFour: {
        flex: 3.5,
        marginHorizontal: 20,
        top: -25,

    },
    bgFocus: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 20,
    },
    bgText: {
        color: '#2D3B4E',
        width: '50%',
        fontSize: 16,
    },



})