import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import chat from '../assets/chat-call.png';
import call from '../assets/call.png';
import mute from '../assets/mute.png';
import network from '../assets/network.png';
import video from '../assets/video.png';


export default function FooterVideoCall(props) {
    return (
        <View style={styles.options}>
            <Avatar source={call} rounded size={60} onPress={() => props.nav.navigate('GroupCallScreenUpdate')} />
            <Avatar source={mute} rounded size={60} />
            <Avatar source={video} rounded size={60} />
            <Avatar source={chat} rounded size={60} onPress={() => props.nav.navigate('OverlayScreen',{adj: 'GC', forCh: 'yes'})}/>
            <Avatar source={network} rounded size={60} />
        </View>

    )
}

const styles = StyleSheet.create({
    options: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 20,
    },

})
