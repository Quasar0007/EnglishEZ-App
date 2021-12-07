import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Avatar } from 'react-native-elements';

import HeaderBack from '../components/HeaderBack';
import logoHead from '../assets/Approach-People.png';
import flash from '../assets/flash.png';
import cross from '../assets/close.png';

export default function NotificationScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderBack title="Notification"/>
            </View>
            <Text style={styles.recent}>Request a person to talk to them one on one</Text>
            <View style={styles.cardList}>
                <View style={styles.info}>
                    <Avatar
                        size={40}
                        rounded
                        source={logoHead}
                    />
                    <View style={styles.Nell}>
                        <Text style={styles.cardText}>Nell Hudson</Text>
                        <View style={styles.flash}>
                            <Image source={flash} style={styles.img}/>
                            <Text style={styles.thirty}>30 wants to chat</Text>
                        </View>
                    </View>
                    <Image source={cross} style={styles.imgTwo} />
                    <TouchableOpacity style={styles.cardBtn}>
                        <Text style={styles.txt}>Accept</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Avatar
                        size={40}
                        rounded
                        source={logoHead}
                    />
                    <View style={styles.NellTwo}>
                        <Text style={styles.cardText}>Nell Hudson</Text>
                        <View style={styles.flash}>
                            <Image source={flash} style={styles.img}/>
                            <Text style={styles.thirty}>30 accepted your Friend Request</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <Avatar
                        size={40}
                        rounded
                        source={logoHead}
                    />
                    <View style={styles.NellThree}>
                        <Text style={styles.cardText}>Nell Hudson</Text>
                        <View style={styles.flash}>
                            <Text style={styles.five}>5 min ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBtn:{
        backgroundColor: '#5468FF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },

    cardList:{
        flex: 12,
    },
    cardText:{
        fontSize: 16,
        color: '#110F27',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    first:{
        flex: 2,
    },
    flash:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    img:{
        height: 10,
        width: 10,
    },
    imgTwo:{
        height: 13,
        width: 13,
        left: 20,
    },
    info:{
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        marginVertical: 5,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    Nell:{
        right: 20,
    },
    NellTwo:{
        right: 70,
    },
    NellThree:{
        right: 200,
    },
    recent:{
        flex: 1.5,
        fontSize: 20,
        color: '#232536',
        textAlignVertical: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    thirty:{
        color:'#9FB5C6',
        left: 5,
    },
    five:{
        color:'#9FB5C6',
    },
    txt:{
        color: '#FFF',
        fontSize: 14,
    },
})
