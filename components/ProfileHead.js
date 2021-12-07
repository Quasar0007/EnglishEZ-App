import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Badge, Avatar } from 'react-native-elements';

import Menu from '../assets/menu.png';
import notification from '../assets/Notification.png';
import logoHead from '../assets/Approach-People.png';



export default function ProfileHead(props) {
    var stylo = styles.profileHead
    var img = styles.imgOne
    if (props.badge === "true") {
        var badging = <Badge value="2" status="warning" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
    }
    else if (props.badge==="trf"){
        var badging = null
        stylo = styles.profileHeadTwo
        img = styles.imgOneNext
    }
    else {
        var badging = null
    }
    return (
        <View style={stylo}>
            <TouchableOpacity onPress={() => props.navi.navigate('UserScreen',{path: props.shrc})}>
                <Image source={Menu} style={img} />
            </TouchableOpacity>
            <Text style={styles.profileText}>{props.title}</Text>
            <TouchableOpacity style={styles.notify} onPress={() => props.nav.navigate('NotificationScreen')}>
                <Image source={notification} style={styles.imgTwo} />
                {badging}
            </TouchableOpacity>
            <Avatar
                size={30}
                rounded
                source={{
                    uri: props.shrc
                }}
                containerStyle={{left: 10, bottom: 3}}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    imgOne: {
        height: 90,
        width: 90,
        left: -30,
    },
    imgOneNext: {
        height: 90,
        width: 90,
        left: -30,
        top: -27,
    },
    imgTwo: {
        height: 25,
        width: 25,
    },

    notify: {
        right: -40,
    },


    profileHead: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    profileHeadTwo: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: 20,
    },

    profileText: {
        fontSize: 24,
        color: '#FFFFFF',
        left: -80,
        top: -4,
        fontWeight: 'bold',
    },

})