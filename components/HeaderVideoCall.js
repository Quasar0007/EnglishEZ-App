import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import HeaderBack from './HeaderBack';

export default function HeaderVideoCall() {
    return (
        <View style={styles.cont}>
            <View style={styles.first}>
                <HeaderBack notify="true" title="Group Call" check="style" />
            </View>
            <View style={styles.second}>
                <Text style={styles.Nell}>Nell Hudson</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Advance</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    cont:{
        flex: 1,
    },
    btn: {
        backgroundColor: '#FFF',
        paddingVertical: 7,
        paddingHorizontal: 14,
        borderRadius: 20,
    },
    btnText: {
        fontSize: 14,
        color: '#5468FF'
    },
    button: {
        bottom: 48,
    },
    first: {
        flex: 2,
    },
    Nell: {
        fontSize: 18,
        color: '#FFF',
        bottom: 45,
    },
    second: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },

})