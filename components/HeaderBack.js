import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import back from '../assets/back.png';
import notification from '../assets/Notification.png';



export default function HeaderBack(props) {
    var notif = null;
    var newStyle = styles.profileHead;
    if (props.notify==="true"){
        var notif = <Image source={notification} style={styles.imgTwo} />
    }
    if (props.check==="style"){
        newStyle = styles.profileHeadTwo;
    }
    
    return (
        <TouchableOpacity style={newStyle}>
            <Image source={back} style={styles.img} />
            <Text style={styles.profileText}>{props.title}</Text>
            {notif}
        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    img: {
        height: 40,
        width: 40,
        marginRight: 30,
        marginLeft: 20,
    },
    imgTwo: {
        height: 20,
        width: 20,
        left: 160,
        top: 0,
    },
    profileHead: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profileHeadTwo: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 15,
    },
    profileText: {
        fontSize: 24,
        color: '#FFFFFF',
    },

})