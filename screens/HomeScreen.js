import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ProfileHead from '../components/ProfileHead';
import database from '@react-native-firebase/database';
import logoHead from '../assets/Approach-People.png';
import Edit from '../assets/Edit.png';
import check from '../assets/check.png';
import { Avatar } from 'react-native-elements';
import InviteFriends from '../components/InviteFriends';
import AnimationEarning from '../components/AnimationEarning';
import ImagePicker from 'react-native-image-crop-picker';


export default function HomeScreen({ route, navigation }) {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [confirm, setConfirm] = React.useState(true);
    const [imgi, setImgi] = React.useState('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png')

    var i = route.params.final;

    const Camera = () => {
        ImagePicker.openCamera({
            width: 100,
            height: 100,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImgi(image.path);
            setConfirm(true);

          }).catch(err =>{
              console.log(err)
          });
    }

    const Gallery = () => {
        ImagePicker.openPicker({
            width: 100,
            height: 100,
            cropping: true
          }).then(image => {
            console.log(image);
            setImgi(image.path);
            setConfirm(true);
          }).catch(err => {
              console.log(err)
          });
    }

    database()
        .ref(`/new/${i}`)
        .once('value')
        .then(snapshot => {
            console.log('User data: ', snapshot.val().Name);
            setName(snapshot.val().Name)
            setAge(snapshot.val().Age)
        });
    database()
        .ref(`/new/${i}`)
        .update({
            imagePath: imgi
        })
        .then(() => {
            console.log('Data Updated')
        });
    if (confirm) {
        return (
            <View style={styles.container}>
                <View style={styles.first}>
                    <ProfileHead badge="trf" title="Home" shrc={imgi} navi={navigation}/>
                </View>
                <View style={styles.cardOne}>
                    <Avatar
                        size={80}
                        rounded
                        source={{
                            uri: imgi
                        }}
                        onPress={() => setConfirm(false)}
                    />
                    <View style={styles.Nell}>
                        <Text style={styles.NellText}>{name}</Text>
                        <Text style={styles.NellAge}>{age} years old</Text>
                        <TouchableOpacity style={styles.btnNell}>
                            <Text style={styles.btnTxt}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.touchImg}>
                        <Image source={Edit} style={styles.img} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardTwo}>
                    <Text style={styles.habit}>Habit-Tracker</Text>
                    <View style={styles.circled}>
                        <Avatar
                            size={40}
                            rounded
                            source={check}
                        />
                        <View style={styles.Two}>
                            <Text style={styles.twoText}>2</Text>
                        </View>
                        <View style={styles.same}>
                            <Text style={styles.numText}>3</Text>
                        </View>
                        <View style={styles.same}>
                            <Text style={styles.numText}>4</Text>
                        </View>
                        <View style={styles.same}>
                            <Text style={styles.numText}>5</Text>
                        </View>
                        <View style={styles.same}>
                            <Text style={styles.numText}>6</Text>
                        </View>
                        <View style={styles.same}>
                            <Text style={styles.numText}>7</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.crdThree}>
                    <InviteFriends single="true" />
                </View>
                <View style={styles.crdFour}>
                    <AnimationEarning />
                </View>
                <View style={styles.foot}></View>
            </View>
        )
    }
    else{
        return(
            <View style={styles.cont}>
                <TouchableOpacity style={styles.bton} onPress={() => Camera()}>
                    <Text>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bton} onPress={() => Gallery()}>
                    <Text>Upload from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bton} onPress={() => setConfirm(true)}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    btnNell: {
        backgroundColor: '#5468FF',
        elevation: 2,
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 20,
        top: 10,
        left: 5
    },
    
    
    btnTxt: {
        fontSize: 10,
        color: '#FFFFFF',
    },
    bton:{
        flex: 0.6,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#5468FF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardOne: {
        flex: 3,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
        top: -70,
        borderRadius: 10,
    },
    cardTwo: {
        flex: 2,
        marginHorizontal: 20,
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        elevation: 5,
        top: -55,
        borderRadius: 10,
        padding: 10,
    },
    circled: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cont:{
        flex: 0.5
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    crdFour: {
        flex: 3.5,
    },
    crdThree: {
        flex: 3.5
    },
    first: {
        flex: 4.5,
    },
    foot: {
        flex: 0.5,
    },
    habit: {
        color: '#07051B',
        fontWeight: 'bold',
    },
    img: {
        height: 20,
        width: 20,
    },
    Nell: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        right: 30,
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
    numText: {
        color: '#9FB5C6',
    },
    same: {
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#DFE9F1',
    },
    touchImg: {
        bottom: 25,
    },
    Two: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC350',
    },
    twoText: {
        color: '#FFFFFF',
    }
})