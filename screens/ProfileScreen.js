import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import database from '@react-native-firebase/database';

import back from '../assets/back.png';
import check from '../assets/check.png';
import checkTwo from '../assets/checkTwo.png';

export default function ProfileScreen({ route, navigation }) {
    const nums = route.params.name
    const [scrname, setScrname] = React.useState('');
    const [userage, setUserage] = React.useState('');
    const [usermail, setUsermail] = React.useState('');
    const [gend, setGend] = React.useState('');

    const eventHandler = (mail) => {
        mail = mail.replace('.','')
        database()
            .ref(`/new/${mail}`)
            .set({
                Name: scrname,
                Age: userage,
                Email: usermail,
                Gender: gend,
            })
            .then(() => console.log('Data set.'));
        navigation.navigate('CongoScreen',{id: mail})
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileHead}>
                <Image source={back} style={styles.img} />
                <Text style={styles.profileText}>Complete Profile</Text>
            </TouchableOpacity>
            <View style={styles.mobileNum}>
                <Text style={styles.mobileText}>Mobile Number</Text>
                <Text style={styles.numText}>{nums}</Text>
            </View>
            <Text style={styles.generalInfo}>Couple of more details before we take you to the awesome land!</Text>
            <View style={styles.screenName}>
                <Text style={styles.screenText}>Choose a screen name</Text>
                <Text style={styles.generalInfoTwo}>You will be shown to other users with this name</Text>
                <View style={styles.nameInput}>
                    <TextInput defaultValue="alishjasani" value={scrname} onChangeText={(text) => setScrname(text)} style={styles.input} />
                    <Image source={check} style={styles.imgTwo} />
                </View>
            </View>
            <View style={styles.gender}>
                <Text style={styles.genderText}>Gender</Text>
                <Text style={styles.generalInfoTwo}>Don't worry, it won't be shown to anyone</Text>
                <View style={styles.genderOptions}>
                    <TouchableOpacity style={styles.gendersMale} onPress={() => setGend('Male')}>
                        <Text style={styles.gendersMaleText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genders} onPress={() => setGend('Female')}>
                        <Text style={styles.gendersText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.genders} onPress={() => setGend('Other')}>
                        <Text style={styles.gendersText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.age}>
                <Text style={styles.screenText}>Age</Text>
                <TextInput defaultValue="25" value={userage} onChangeText={(text) => setUserage(text)} style={styles.input} />
            </View>
            <View style={styles.emailAddress}>
                <Text style={styles.screenText}>Email Address</Text>
                <View style={styles.nameInput}>
                    <TextInput defaultValue="example@gmail.com" value={usermail} onChangeText={(text) => setUsermail(text)} style={styles.input} />
                    <Image source={check} style={styles.imgTwo} />
                </View>
            </View>
            <View style={styles.register}>
                <Image source={checkTwo} style={styles.imgThree} />
                <Text style={styles.generalInfoTwo}>By registering you agree to our T & C</Text>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => eventHandler(usermail.replace('.',''))}>
                    <Text style={styles.appButtonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    age: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: -20,
        top: 70,

    },
    appButtonContainer: {
        flex: 1,
        backgroundColor: "#5468FF",
        marginTop: 30,
        top: 20,
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    emailAddress: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        top: 85,
        marginRight: -20,

    },
    foot: {
        flex: 1.4,
        top: 5,
    },
    gender: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: -20,
    },
    genders: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10,

    },
    gendersMale: {
        backgroundColor: '#5468FF',
        elevation: 5,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    genderOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    genderText: {
        fontSize: 20,
        color: '#232536',
        marginTop: 110,
    },
    gendersText: {
        fontSize: 16,
        color: '#07051B',
    },
    gendersMaleText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    generalInfo: {
        flex: 0.9,
        fontSize: 16,
        color: '#9FB5C6',
        marginLeft: 20,
        marginRight: 30,
    },
    generalInfoTwo: {
        fontSize: 16,
        color: '#9FB5C6',
    },
    img: {
        height: 40,
        width: 40,
        marginRight: 30,
        marginLeft: 20,
    },
    imgTwo: {
        height: 20,
        width: 20,
        right: 70,
        top: 24,
    },
    imgThree: {
        height: 20,
        width: 20,
        marginRight: 15,
    },
    input: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        marginRight: 20,
        borderRadius: 8,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        width: '90%',

    },
    mobileNum: {
        flex: 0.8,
        justifyContent: 'center',
        marginLeft: 20,
    },
    mobileText: {
        fontSize: 20,
        color: '#232536'
    },
    nameInput: {
        flexDirection: 'row',
    },
    numText: {
        fontSize: 20,
        color: '#38CF9E',
    },
    profileHead: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    profileText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    register: {
        flex: 1,
        flexDirection: 'row',
        top: 100,
        marginLeft: 20,
    },
    screenName: {
        flex: 0.8,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: -20,
    },
    screenText: {
        fontSize: 20,
        color: '#232536'
    }
})
