import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import SelfLearn from '../assets/Self-Learn.png';
import Group from '../assets/Group.png';
import Home from '../assets/Home.png';
import AllUser from '../assets/All-user.png';
import Chat from '../assets/Chat.png';
import ChatSelected from '../assets/Chat-selected.png';
import GroupUnselect from '../assets/group-unselected.png';
import AllSelect from '../assets/All-user-selected.png';


export default function Footer(props) {

    var srcOne = AllUser;
    var srcTwo = Chat;
    var srcThree = GroupUnselect;
    var stylingChat = styles.iconText;
    var stylingGroup = styles.iconText;
    var stylingUser = styles.iconText;

    if (props.AllUser==="true"){
        srcOne = AllSelect
        stylingUser = styles.iconTextGroup
    }

    else if (props.Chat === "true"){
        srcTwo = ChatSelected
        stylingChat = styles.iconTextGroup
    }
    else{
        srcThree = Group
        stylingGroup = styles.iconTextGroup
    }
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footIcon} onPress={() => props.nav.navigate('ChatBotScreen')}>
                <Image source={SelfLearn} style={styles.imgFoot} />
                <Text style={styles.iconText}>Self Learn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footIcon} onPress={() => props.nav.navigate('GroupsScreen')}>
                <Image source={srcThree} style={styles.imgFoot} />
                <Text style={stylingGroup}>Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footIcon} onPress={() => props.nav.navigate('HomeScreen')}>
                <Image source={Home} style={styles.imgFoot} />
                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footIcon} onPress={() => props.nav.navigate('UserScreen')}>
                <Image source={srcOne} style={styles.imgFoot} />
                <Text style={stylingUser}>All user</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footIcon} onPress={() => props.nav.navigate('ChatScreen')}>
                <Image source={srcTwo} style={styles.imgFoot}/>
                <Text style={stylingChat}>Chat</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles= StyleSheet.create({
    footer:{
        flex: 1.9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFF',
        elevation: 20,
    },
    footIcon:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bottom: 0,
    },
    iconText:{
        color: '#9FB5C6',
    },
    iconTextGroup:{
        color: '#5468FF',
    },
    imgFoot:{
        height: 30,
        width: 30,
    },



})