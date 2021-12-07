import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Invite from '../assets/Invite-Friends.png';

export default function InviteFriends(props) {
    var sign;
    if (props.single === "true") {
        sign = <View style={styles.linearGradient}>
            <Text style={styles.practice}>Practising with your own friends, increases chances of learning by 30%</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>INVITE FRIENDS</Text>
            </TouchableOpacity>
        </View>
    }
    else {
        sign = <View style={styles.linearGradient}>
            <Text style={styles.practice}>INVITE FRIENDS</Text>
        </View>
    }

    return (
        <LinearGradient style={styles.cardThree} colors={['#5558FF', '#00C0FF']}>
            {sign}
            <Image source={Invite} style={styles.imgTwo} />
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    cardThree: {
        flex: 3.5,
        marginHorizontal: 20,
        flexDirection: 'row',
        elevation: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        top: -40,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#FFF',
        width: 100,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    btnText: {
        fontSize: 10,
        color: '#05B9FF',
        textAlign: 'center',

    },
    imgTwo: {
        flex: 4,
        height: 120,
        width: 120,
    },
    linearGradient: {
        flex: 6,
        justifyContent: 'space-between',
    },
    practice: {
        width: 150,
        color: '#FFF',
        fontSize: 14,
    },



})