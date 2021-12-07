import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Vid from '../components/Vid';
import HeaderVideoCall from '../components/HeaderVideoCall';
import FooterVideoCall from '../components/FooterVideoCall';
import Chat from './Chat';
import { Overlay } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import notif from '../assets/Notification.png';


export default function OverlayScreen({ route, navigation }) {
    var adjust = <View style={styles.firstOne}>
        <Avatar source={{
            uri: route.params.iim
        }} rounded size={50} />
        <Text style={styles.Nell}>{route.params.pm}</Text>
        <Avatar source={notif} rounded size={30} />
    </View>
    if (route.params.adj === "GC") {
        adjust = <View style={styles.first}>
            <HeaderVideoCall />
        </View>
    }
    return (
        <View style={styles.container}>
            {adjust}
            <Overlay overlayStyle={styles.over} fullScreen="false" >
                <Chat nav={navigation} obey={route.params.forCh}/>
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    displayGrid: {
        flex: 6,
        marginHorizontal: 20,
        flexWrap: 'wrap',
    },
    first: {
        flex: 3,
    },
    firstOne: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#5468FF',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Nell: {
        fontSize: 28,
        color: '#FFF',
        right: 45,
    },


    options: {
        flex: 1,
    },
    over: {
        flex: 1,
        top: 65,
        backgroundColor: '#FFFFFF00',
    }
})