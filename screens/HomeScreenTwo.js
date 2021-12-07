import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ProfileHead from '../components/ProfileHead';
import logoHead from '../assets/Approach-People.png';
import Edit from '../assets/Edit.png';
import { Avatar } from 'react-native-elements';
import InviteFriends from '../components/InviteFriends';
import AnimationEarning from '../components/AnimationEarning';
import Slider from 'react-native-smooth-slider';

export default function HomeScreenTwo() {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <ProfileHead badge="trf" title="Home" />
            </View>
            <View style={styles.cardOne}>
                <View style={styles.top}>
                    <Avatar
                        size={80}
                        rounded
                        source={logoHead}
                    />
                    <View style={styles.Nell}>
                        <Text style={styles.NellText}>Nell Hudson</Text>
                        <Text style={styles.NellAge}>25 years old</Text>
                    </View>
                    <Image source={Edit} style={styles.img} />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.title}>My hobbies</Text>
                    <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Sport</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Music</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Gaming</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.couple}>Couple of more details before we take you to the awesome land! Couple of more details before</Text>
                    </View>
                    <View style={styles.less}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Less</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.cardTwo}>
                <Text style={styles.complete}>Complete your profile</Text>
                <Slider value={0.75} thumbStyle={styles.thumb} trackStyle={styles.slider} minimumTrackTintColor="#FFF" style={styles.sliderPos}/>
                <Text style={styles.pos}>75%</Text>
            </View>
            <View style={styles.cardThree}>
                <InviteFriends single="true"/>
            </View>
            <View style={styles.foot}>
                <AnimationEarning/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom:{
        flex: 3.5,
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        top: -8,

    },
    btn:{
        backgroundColor: '#5468FF',
        elevation: 2,
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        
    },
    btns:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: -5,
    },
    btnText:{
        fontSize: 10,
        color: '#FFFFFF',
    },
    cardOne:{
        flex: 9,
        backgroundColor: '#FFF',
        elevation: 5,
        marginHorizontal: 20,
        top: -50,
        borderRadius: 10,
    },

    cardThree:{
        flex: 4,
        top: 4,
    },
    cardTwo:{
        flex: 2,
        top: -42,
        marginHorizontal: 20,
        backgroundColor: '#5468FF',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    complete:{
        color: '#FFFFFF',
        top: 7,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    couple:{
        width: '80%'
    },
    first: {
        flex: 4,
    },
    foot:{
        flex: 3,
        marginBottom: -20,
    },
    img: {
        height: 20,
        width: 20,
        bottom: 25,
    },
    less:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    Nell: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        right: 40,
    },
    NellAge: {
        fontSize: 16,
        color: '#9FB5C6',
    },
    NellText: {
        fontSize: 20,
        color: '#07051B',
        fontWeight: 'bold',
    },
    pos:{
        left: 238,
        bottom: 17,
        color: '#2D3B4E',
        fontSize: 12,
        fontWeight: 'bold',
    },
    slider:{
        height: 15,
        borderRadius: 7.5,
    },
    sliderPos:{
        top: 8,
    },
    thumb:{
        width: 30,
        height: 30,
        backgroundColor: '#FFF'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    top:{
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
})