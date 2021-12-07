import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import logoHead from '../assets/logo-head.png';

export default function OTPScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.heading} source={logoHead} />
            <Text style={styles.title}>English EZ</Text>
            <Text style={styles.otp}>We texted you a code to verify your phone number</Text>
            <View style={styles.mid}>
                <View style={styles.num}>
                    <TextInput value={code} onChangeText={(text)=> setCode(text)}/>
                </View>
                <Text style={styles.or}>Code Didn’t receive? send it again in <Text style={styles.secs}>30s</Text></Text>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => confirmCode(code)}>
                    <Text style={styles.appButtonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    appButtonContainer: {
        backgroundColor: "#5468FF",
        borderRadius: 10,
        paddingVertical: 25,
        paddingHorizontal: 160,
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        flex: 1,
        top: 30,
        width: '50%',
    },
    mid: {
        flex: 6,
        top: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 80,
        width: '100%',
    },
    num: {
        borderWidth: 2,
        width: '90%',
        borderRadius: 10,
    },
    numText: {
        padding: 30,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        borderRadius: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#07051B',
        marginHorizontal: 10,
    },
    or: {
        fontSize: 20,
        width: '50%',
        textAlign: 'center',
        fontWeight: '900',
    },
    secs:{
        color: '#5468FF',
    },
    otp: {
        flex: 1,
        width: '80%',
        color: '#2D3B4E',
        fontSize: 20,
        textAlign: 'center',
        color: '#2D3B4E',
        fontWeight: 'bold',
        top: 10,

    },
    title: {
        flex: 2,
        top: 40,
        fontSize: 50,
        color: '#07051B',
    }

})
