import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

import logoHead from '../assets/logo-head.png';
import google1 from '../assets/google-1.png';
import facebook1 from '../assets/facebook-1.png';
import truecaller from '../assets/truecaller.png';

export default function NumberScreen({navigation}) {
    const [number, setNumber] = React.useState('');
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('')

    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
            alert('User sign-in successful')
            navigation.navigate('ProfileScreen',{name: number});
        }
        catch (err) {
            alert(JSON.stringify(err));
        }
    }

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    if (!confirm) {

        return (
            <View style={styles.container}>
                <Image style={styles.heading} source={logoHead} />
                <Text style={styles.title}>English EZ</Text>
                <Text style={styles.otp}>Enter the mobile number and the OTP</Text>
                <View style={styles.mid}>
                    <View style={styles.textInp}>
                        <TextInput
                            value={number}
                            onChangeText={(text) => setNumber(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => signInWithPhoneNumber(number)}>
                        <Text style={styles.appButtonText}>CONTINUE</Text>
                    </TouchableOpacity>
                    <Text style={styles.or}>Or</Text>
                    <View style={styles.images}>
                        <Image style={styles.img} source={google1} />
                        <Image style={styles.img} source={facebook1} />
                        <Image style={styles.img} source={truecaller} />
                    </View>
                </View>
            </View>

        )
    }
    return (
        <View style={styles.container}>
            <Image style={styles.heading} source={logoHead} />
            <Text style={styles.title}>English EZ</Text>
            <Text style={styles.otp}>We texted you a code to verify your phone number</Text>
            <View style={styles.midTwo}>
                <View style={styles.num}>
                    <TextInput value={code} onChangeText={(text)=> setCode(text)}/>
                </View>
                <Text style={styles.orTwo}>Code Didn’t receive? send it again in <Text style={styles.secs}>30s</Text></Text>
                <TouchableOpacity style={styles.appButtonContainerTwo} onPress={() => confirmCode()}>
                    <Text style={styles.appButtonTextTwo}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#5468FF",
        borderRadius: 10,
        paddingVertical: 25,
    },
    appButtonContainerTwo: {
        backgroundColor: "#5468FF",
        borderRadius: 10,
        paddingVertical: 25,
        paddingHorizontal: 160,
    },

    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonTextTwo: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        flex: 1,
        top: 30,
        width: '50%',
    },
    img: {
        height: 60,
        width: 60,
    },
    images: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
    },
    mid: {
        flex: 6,
        top: 20,
        justifyContent: 'space-evenly',
        marginBottom: 80,
    },
    midTwo: {
        flex: 6,
        top: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 80,
        width: '100%',
    },
    num: {
        borderWidth: 2,
        width: '90%',
        borderRadius: 10,
        paddingLeft: 20,
    },
    or: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    orTwo: {
        fontSize: 20,
        width: '50%',
        textAlign: 'center',
        fontWeight: '900',
    },

    otp: {
        flex: 1,
        width: '80%',
        color: '#2D3B4E',
        fontSize: 20,
        textAlign: 'center',
        color: '#2D3B4E',
        fontWeight: 'bold',
        top: 10,

    },
    textInp: {
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 20,
    },
    title: {
        flex: 2,
        top: 40,
        fontSize: 50,
        color: '#07051B',
    }

})
