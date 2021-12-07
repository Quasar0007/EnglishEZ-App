import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Overlay } from 'react-native-elements';
import logoHead from '../assets/Approach-People.png';
import notif from '../assets/Notification.png';
import chat from '../assets/chat-call.png';
import call from '../assets/call.png';
import OverlayScreen from './OverlayScreen';
import Chat from './Chat';



export default function NewVideoCallScreen({ route, navigation }) {
    // const [vis, setVis] = React.useState(false);
    // if (route.params.any){
    //     setVis(false)
    // }


    // console.log(route.params.see, set)

    const imgUri = route.params.new
    const nme = route.params.name
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Avatar source={{
                    uri: imgUri
                }} rounded size={50} />
                <Text style={styles.Nell}>{nme}</Text>
                <Avatar source={notif} rounded size={30} />
            </View>
            <View style={styles.second}>
            </View>
            <View style={styles.foot}>
                <Avatar source={call} rounded size={60} containerStyle={{ marginHorizontal: 10 }} onPress={() => navigation.navigate('VideoCallFullScreen')} />
                <Avatar source={chat} rounded size={60} containerStyle={{ marginHorizontal: 10 }} onPress={() => navigation.navigate('OverlayScreen',{iim: imgUri, pm: nme})} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    first: {
        flex: 1.6,
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

    second: {
        flex: 6,
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,

    },
    over: {
        flex: 0.8,
        top: 65,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    }

})