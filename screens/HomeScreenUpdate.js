import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import ProfileHead from '../components/ProfileHead';

import red from '../assets/red.jpg';
import flash from '../assets/flash.png';
import logoHead from '../assets/Approach-People.png';
import { Avatar } from 'react-native-elements';
import InviteFriends from '../components/InviteFriends';
import AnimationEarning from '../components/AnimationEarning';

export default function HomeScreenUpdate() {
    return (
        <View style={styles.cont}>
            <View style={styles.first}>
                <ProfileHead title="Home" />
            </View>
            <View style={styles.ava}></View>
            <View style={styles.two}>
                <View style={styles.pos}><Avatar source={logoHead} size={70} rounded /></View>
                <Text style={styles.Nell}>Nell Hudson</Text>
                <View style={styles.flashTxt}>
                    <Image source={flash} style={styles.imgTwo} />
                    <Text style={styles.txt}>30 wants to chat</Text>
                </View>
            </View>
            <View style={styles.three}>
                <AnimationEarning />
            </View>
            <View style={styles.four}>
                <InviteFriends />
            </View>
            <View style={styles.footer}>
                <ImageBackground source={red} style={styles.redImg} imageStyle={{
                    borderRadius: 10,
                }} >
                    <Text></Text>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ava: {
        flex: 0.5,
    },
    cont: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    first: {
        flex: 1,
    },
    flashTxt: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 30,
    },
    footer: {
        flex: 1.5,
        marginHorizontal: 20,
        top: 10,
    },
    four: {
        flex: 1.5,
        top: 40,
    },
    imgTwo: {
        height: 15,
        width: 7,
        right: 7,
    },
    Nell: {
        fontSize: 24,
        color: '#07051B',
        bottom: 30,

    },
    pos:{
        backgroundColor: '#ffffff00',
        elevation: 5,
        bottom: 32,
        borderRadius:30,
    },
    redImg: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: '#FFF',
        elevation: 10,
    },
    three: {
        flex: 1.7,
        top: 17,
    },
    two: {
        flex: 1.7,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 15,
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10,
        marginVertical: 5,
    },
    txt: {
        color: '#9FB5C6',
        fontSize: 20,
    }
})