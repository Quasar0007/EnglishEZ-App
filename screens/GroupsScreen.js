import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ProfileHead from '../components/ProfileHead';

import { Avatar } from 'react-native-elements';
import logoHead from '../assets/Approach-People.png';

import Footer from '../components/Footer';


export default function GroupsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <ProfileHead title="Groups" badge="true"/>
            </View>
            <Text style={styles.joinGroupText}>Join a group & start speaking</Text>
            <View style={styles.card}>
                <View style={styles.leftPart}>
                    <Text style={styles.mainText}>Pro Speakers</Text>
                    <Text style={styles.supportText}>Advance</Text>
                    <Text style={styles.tags}>#Sports, #Sports</Text>
                    <View style={styles.avatars}>
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}

                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}

                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                    </View>
                </View>
                <View style={styles.rightPart}>
                    <TouchableOpacity style={styles.btnContOne}>
                        <Text style={styles.joinBtn}>Join Group</Text>
                    </TouchableOpacity>
                    <Text style={styles.availability}>1 Seat Available</Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.leftPart}>
                    <Text style={styles.mainText}>Pro Speakers</Text>
                    <Text style={styles.supportText}>Advance</Text>
                    <Text style={styles.tags}>#Sports, #Sports</Text>
                    <View style={styles.avatars}>
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}

                        />
                        <Avatar
                            size={30}
                            rounded
                            source={logoHead}
                            marginHorizontal={2}
                        />
                    </View>
                </View>
                <View style={styles.rightPart}>
                    <TouchableOpacity style={styles.btnContTwo}>
                        <Text style={styles.joinBtnTwo}>Group Full</Text>
                    </TouchableOpacity>
                    <Text style={styles.availabilityTwo}>No Seat Available</Text>
                </View>
            </View>
            <View style={styles.cardTwo}>
                <Text style={styles.headText}>That's all, folks!</Text>
                <Text style={styles.contentText}>we recommend you to come between 7-10PM for finding more people</Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnCont} onPress={() => navigation.navigate('UserScreen')}>
                    <Text style={styles.btnText}>CREATE NEW GROUP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.foot}>
                <Footer AllUser="false" Chat="false"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    availability:{
        color: '#38CF9E',
    },
    availabilityTwo:{
        color: '#9FB5C6',
        fontSize: 13,
    },
    avatars:{
        flexDirection : 'row',
    },
    btn:{
        flex: 2.5,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',


    },
    btnCont:{
        backgroundColor: "#5468FF",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        borderRadius: 10,
    },
    btnContOne:{
        backgroundColor: "#5468FF",
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        top: -10,
        right: 5,
        borderRadius: 20,
    },
    btnContTwo:{
        backgroundColor: "#E8F0F6",
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        top: -10,
        right: 5,
        borderRadius: 20,
    },
    btnText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    card:{
        flex: 2.5,
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        marginVertical: 10,
        paddingVertical: 15,
        paddingLeft: 10,
        borderRadius: 15,

    },
    cardTwo:{
        flex: 1.5,
        marginHorizontal: 20,
        backgroundColor: '#FFF',
        elevation: 10,
        borderRadius: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    contentText:{
        textAlign: 'center',
        color: '#07051B',
    },
    first:{
        flex: 2,
    },
    foot:{
        flex: 1.9,
    },
    headText:{
        color:'#07051B',
        fontSize: 20,
    },
    joinBtn:{
        color: '#FFF',
    },
    joinBtnTwo:{
        color: '#9FB5C6',
    },
    joinGroupText:{
        flex: 1,
        marginHorizontal: 20,
        top: 10,
        fontSize: 20,
        color: '#232536',
    },
    leftPart:{
        flex: 7,
        justifyContent: 'space-around',
    },
    mainText:{
        fontSize: 18,
        color: '#07051B',
    },
    rightPart:{
        flex:3,
        justifyContent: 'space-around',
    },
    supportText:{
        fontSize: 14,
    },
    tags:{
        fontSize: 14,
        color: '#FFB727',
    }
})