import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HeaderBack from '../components/HeaderBack';
import { Avatar } from 'react-native-elements';
import bot from '../assets/bot.png';
import volume from '../assets/Volume-Up.png';
import keyboard from '../assets/keyboard.png';
import voice from '../assets/voice.png';
import logoHead from '../assets/Approach-People.png';

export default function ChatBotScreen(props) {
    var val = styles.empty;
    var add = null;
    var text =null;
    if (props.next === "yes"){
        val = styles.emptyTwo;
        add = <View style={styles.secondSide}>
            <View style={styles.textPartTwo}>
                <View style={styles.boxTwo}>
                    <Text style={styles.msgTwo}>Lorem Ipsum, you need to 4 be sure there</Text>
                    <Image source={volume} style={styles.imgAgain} />
                </View>
                <Text style={styles.timeTwo}>2:20 PM</Text>
            </View>
            <Avatar
                source={logoHead}
                rounded
                size={30}
            />
        </View>;
        text = <View style={styles.downText}><Text style={styles.txt}>Sourabh is speaking...</Text></View>;

    }

    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderBack title="Chat Bot" />
            </View>
            <Text style={styles.chatBot}>Chat with bot</Text>
            <View style={styles.msgDisp}>
                <Avatar
                    source={bot}
                    rounded
                    size={40}
                />
                <View style={styles.textPart}>
                    <View style={styles.box}>
                        <Text style={styles.msg}>Hai Emma, this is Boris from US</Text>
                        <Image source={volume} style={styles.img} />
                    </View>
                    <Text style={styles.time}>Mar 29, 08:03 PM</Text>
                </View>
            </View>
            {add}
            <View style={val}></View>
            {text}
            <View style={styles.footer}>
                <Image
                    source={voice} style={styles.imgThree}
                />
            </View>
            <Image source={keyboard} style={styles.imgTwo} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#E8F0F6',
        padding: 10,
        flexDirection: 'row',
    },
    boxTwo: {
        backgroundColor: '#5468FF',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        
    },

    chatBot: {
        flex: 1.5,
        fontSize: 20,
        color: '#232536',
        marginHorizontal: 20,
        marginVertical: 10,
        top: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    downText: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {
        flex: 7,
    },
    emptyTwo: {
        flex: 3.5,
    },
    first: {
        flex: 2,
    },
    footer: {
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 15,
        width: 15,
        left: 8,
    },
    imgAgain: {
        height: 12,
        width: 12,
        top: 8,
    },
    imgThree: {
        height: 90,
        width: 90,
    },
    imgTwo: {
        height: 30,
        width: 45,
        position: 'absolute',
        right: 80,
        bottom: 40,
        borderRadius: 3,

    },

    msg: {
        fontSize: 12,
        color: '#07051B',
    },
    msgTwo: {
        fontSize: 12,
        color: '#FFF',
    },

    msgDisp: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 20,

    },
    secondSide: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',

    },
    textPart: {
        justifyContent: 'space-between',
        left: 10,
    },
    textPartTwo: {
        justifyContent: 'space-between',
        right: -40,
    },
    time: {
        color: '#9FB5C6',
        fontSize: 11,
        top: -25,
    },
    timeTwo: {
        color: '#9FB5C6',
        fontSize: 11,
        top: -5,
        left: 180,
    },
    txt:{
        fontSize: 20,
        color: '#232536',
    },



})