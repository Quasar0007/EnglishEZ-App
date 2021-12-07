import React from 'react';
import { StyleSheet, View } from 'react-native';
import Vid from '../components/Vid';
import HeaderVideoCall from '../components/HeaderVideoCall';
import FooterVideoCall from '../components/FooterVideoCall';

export default function VideoCallScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderVideoCall/>
            </View>
            <View style={styles.displayGrid}>
                <Vid/>
                <Vid/>
                <Vid/>
                <Vid/>
            </View>
            <View style={styles.options}>
                <FooterVideoCall/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    displayGrid: {
        flex: 6,
        marginHorizontal: 20,
        flexWrap: 'wrap',
    },
    first:{
        flex: 3,
    },
    options: {
        flex: 1,
    },
})