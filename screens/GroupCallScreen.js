import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import HeaderBack from '../components/HeaderBack';
import { LinearProgress } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import logoHead from '../assets/Approach-People.png';
import volume from '../assets/Volume-Up.png';
import Slider from 'react-native-smooth-slider';


export default function GroupCallScreen(props) {
    const highlightText = string =>
        string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={styles.highlightText}>{word} </Text>
            </Text>
        ));
    const highlightTextTwo = string =>
        string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={styles.highlightTextTwo}>{word} </Text>
            </Text>
        ));
    var conversation = <View style={styles.convo}>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <Text style={styles.name}>Nikhil</Text>
                <Text style={styles.userChat}>Hi, I am Nikhil. How are you?</Text>
            </View>
        </View>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <Text style={styles.name}>Nikhil</Text>
                <Text style={styles.userChat}>{highlightText('I am fine. Do you come here often?')}</Text>
            </View>
        </View>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <Text style={styles.name}>Nikhil</Text>
                <Text style={styles.userChat}>Not really. I come here like once a week.</Text>
            </View>
        </View>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <Text style={styles.name}>Sourabh</Text>
                <Text style={styles.userChat}>{highlightText('Ohh. I')} {highlightTextTwo('too come once in a')} {highlightText('week.')}</Text>
            </View>
        </View>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <Text style={styles.name}>Nikhil</Text>
                <Text style={styles.userChat}>Not really. I come here like once a week.</Text>
            </View>
        </View>
        <View style={styles.oneChat}>
            <Avatar
                source={logoHead}
                size={30}
                rounded
            />
            <View style={styles.textChat}>
                <View style={styles.speaker}>
                    <Text style={styles.name}>Sourabh</Text>
                    <Image source={volume} style={styles.img} />
                </View>
                <Text style={styles.userChatLast}>{highlightText('I don’t get time from my')} {highlightTextTwo('office')}. {highlightText('And I get so tired. I want to practise English.')} But I don’t have any such friends. {highlightText('It’s very')} important {highlightText('to me. It’s')} {highlightTextTwo('difficult')} {highlightText('to find people who can speak English in my area')}</Text>
            </View>
        </View>
    </View>

    if (props.hideChat === "true") {
        conversation = null
    }


    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderBack title="Group Call" notify="true" />
            </View>
            <View style={styles.cardOne}>
                <Text style={styles.complete}>Overall performance</Text>
                <Slider value={0.6} thumbStyle={styles.thumb} trackStyle={styles.slider} minimumTrackTintColor="#5468FF" />
                <Text style={styles.twentyFive}>25</Text>
            </View>
            <View style={styles.talents}>
                <View style={styles.talent}>
                    <Text style={styles.talentTxt}>Fluency</Text>
                    <LinearProgress value={0.5} variant="determinate" style={styles.Linear} color="#5468FF" />
                </View>
                <View style={styles.talent}>
                    <Text style={styles.talentTxt}>Vocabulary</Text>
                    <LinearProgress value={0.5} variant="determinate" style={styles.Linear} color="#5468FF" />
                </View>
                <View style={styles.talent}>
                    <Text style={styles.talentTxt}>Completeness</Text>
                    <LinearProgress value={0.5} variant="determinate" style={styles.Linear} color="#5468FF" />
                </View>
                <View style={styles.talent}>
                    <Text style={styles.talentTxt}>Pronounciation</Text>
                    <LinearProgress value={0.5} variant="determinate" style={styles.Linear} color="#5468FF" />
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.button} onPress={() => props.nav.navigate('NewVideoCallScreen')}>
                    <Text style={styles.btnText}>Try again with a new call</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.highlight}>
                <Text style={styles.highTxt} >Work on the highlighted</Text>
                <Text style={styles.highTxtTwo}>Couple of more details before we take you to the awesome land! Couple of more details before we take you to the awesome land!Couple of more details before we take you to the awesome land!</Text>
            </View>
            {conversation}
        </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        flex: 1,
        marginHorizontal: 20,
    },
    btnText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',

    },
    button: {
        backgroundColor: '#5468FF',
        elevation: 2,
        borderRadius: 7,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    cardOne: {
        flex: 1,
        marginHorizontal: 20,
    },
    complete: {
        color: '#232536',
        fontSize: 18,
        top: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    convo: {
        flex: 5,
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        bottom: 10,
    },
    first: {
        flex: 1.5,
    },
    highlight: {
        flex: 2.5,
        marginHorizontal: 20,
        top: 5,
    },
    highlightText: {
        color: '#38CF9E',
    },
    highlightTextTwo: {
        color: '#FE5E87',
    },
    highTxt: {
        fontSize: 18,
        color: '#232536',
    },
    highTxtTwo: {
        color: '#9FB5C6'
    },
    img: {
        height: 13,
        width: 13,
        backgroundColor: '#232536',
        left: 10,
        top: 3,
    },
    Linear: {
        flex: 6,
        height: 10,
        borderRadius: 5,
    },
    name: {
        fontSize: 12,
        color: '#9FB5C6',
    },
    oneChat: {
        flexDirection: 'row',
    },
    slider: {
        height: 10,
        borderRadius: 7.5,
    },
    speaker: {
        flexDirection: 'row',
    },
    talent: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    talentTxt: {
        flex: 4,
        color: '#232536',
    },
    talents: {
        flex: 2.5,
        justifyContent: 'space-evenly',
    },
    textChat: {
        left: 10,
    },
    thumb: {
        width: 30,
        height: 30,
        backgroundColor: '#FFF'
    },
    twentyFive: {
        left: 215,
        bottom: 30,
        color: '#2D3B4E'
    },
    userChat: {
        fontSize: 12,
        color: '#9FB5C6'
    },
    userChatLast: {
        fontSize: 12,
        marginRight: 15,
        color: '#9FB5C6'
    }
})