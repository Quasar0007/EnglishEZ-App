import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import ProfileHead from '../components/ProfileHead';
import Footer from '../components/Footer';
import { ListItem, Avatar } from 'react-native-elements';
import logoHead from '../assets/Approach-People.png';
import database from '@react-native-firebase/database';


export default function UserScreen({ route, navigation }) {
    const nw = route.params.path;
    const [name, setName] = useState([]);
    useEffect(() => {
        database()
            .ref('/new')
            .once('value')
            .then(snapshot => {
                var it = Object.values(snapshot.val())
                var count = it.length
                const dam =[]
                let i = 0;
                while (i < count) {
                    dam.push({title: it[i].Name})
                    i++;
                }
                setName(dam)
            });

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <ProfileHead title="All Users" badge="false" />
            </View>
            <Text style={styles.request}>Request a person to talk to them one on one</Text>
            <SafeAreaView style={styles.cardListOne}>
                <ScrollView style={styles.cardList}>
                    {
                        name.map((l, i) => (
                            <ListItem key={i} style={styles.info} >
                                <Avatar source={logoHead} size={30} rounded />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.cardText}>{l.title}</ListItem.Title>
                                </ListItem.Content>
                                <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('NewVideoCallScreen',{new: nw, name: l.title})}>
                                    <Text style={styles.txt}>Connect</Text>
                                </TouchableOpacity>

                            </ListItem>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>

            <View style={styles.foot}>
                <Footer AllUser="true" nav={navigation} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    cardBtn: {
        backgroundColor: '#5468FF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    cardBtnTwo: {
        backgroundColor: '#38CF9E',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        opacity: 0.1,
    },
    cardBtnThree: {
        backgroundColor: '#DFE9F1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    cardList: {
        // flex: 6,
        marginHorizontal: 20,
        // marginTop: -100,
        // marginBottom: 80,
    },
    cardListOne: {
        flex: 6,
        // marginHorizontal: 20,
        // marginTop: -100,
        // marginBottom: 80,
    },
    cardText: {
        fontSize: 18,
        color: '#110F27',
    },
    cardTextTwo: {
        fontSize: 18,
        right: 34,
        color: '#110F27',
    },
    cardTextThree: {
        fontSize: 18,
        right: 68,
        color: '#110F27',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    first: {
        flex: 1.3,
    },
    foot: {
        flex: 1.3,
    },
    info: {
        flexDirection: 'row',
        // paddingVertical: 10,
        backgroundColor: '#FFF',
        elevation: 8,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    request: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 20,
        top: 5,
        color: '#232536',
    },
    txt: {
        color: '#FFF',
    },
    txtTwo: {
        color: 'green',
    },
    txtThree: {
        color: '#9FB5C6',
    }


})