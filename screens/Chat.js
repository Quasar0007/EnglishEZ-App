import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import close from '../assets/close-big.png';
import logoHead from '../assets/Approach-People.png';
import emoji from '../assets/emoji.png';
import pin from '../assets/attach.png';
import camera from '../assets/camera.png';
import { TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { ListItem } from 'react-native-elements/dist/list/ListItem';

export default function Chat(props) {
    // const [onion, setOnion] = React.useState("one")
    var today = new Date()
    const [mess, setMess] = React.useState("")
    const [messages, setMessages] = React.useState([])
    const [def, setDef] = React.useState(mess)
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const sendHandler = (flagged) => {
        var time = formatAMPM(today)
        setDef("")
        setMess("")
        if (flagged == "flag") {
            setMessages([...messages, {
                msg: mess,
                clock: time,
                side: styles.oneSide,
                ox: styles.boxTwo,
                ms: styles.msgTwo,
                id: "one"
            }])
        }
        else {
            setMessages([...messages, {
                msg: mess,
                clock: time,
                side: styles.secondSide,
                ox: styles.box,
                ms: styles.msg,
                id: "two"
            }])
        }


    }
    const Camera = () => {
        ImagePicker.openCamera({
            width: 100,
            height: 100,
            cropping: true,
        }).then(image => {
            console.log(image);
        }).catch(err => {
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


    const eventHandler = () => {
        if (props.obey === "yes") {
            props.nav.navigate('VideoCallHalfScreen')
        }
        else {
            props.nav.navigate('NewVideoCallScreen')
        }
    }
    return (
        <View style={styles.cont}>

            <TouchableOpacity style={styles.cross} onPress={() => eventHandler()}>
                <Avatar
                    source={close}
                    rounded
                    size={50}
                />
            </TouchableOpacity>
            <View style={styles.messageDisplay}>
                <SafeAreaView style={styles.cardListOne}>
                    <ScrollView>
                        {
                            messages.map((l, i) => {
                                if (l.id == "one") {
                                    return (<ListItem key={i} style={l.side}>
                                        <Avatar source={logoHead} size={30} rounded containerStyle={{ bottom: 4 }} />
                                        <View style={l.ox}>
                                            <View style={styles.textPart}>
                                                <Text style={l.ms}>{l.msg}</Text>
                                            </View>
                                            <Text style={styles.time}>{l.clock}</Text>
                                        </View>
                                    </ListItem> )
                                }
                                else{
                                    return (<ListItem key={i} style={l.side}>
                                        <View style={l.ox}>
                                            <View style={styles.textPart}>
                                                <Text style={l.ms}>{l.msg}</Text>
                                            </View>
                                            <Text style={styles.time}>{l.clock}</Text>
                                        </View>
                                        <Avatar source={logoHead} size={30} rounded containerStyle={{ bottom: 4 }} />
                                    </ListItem>)
                                }
                            }
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
                <View style={styles.footer}>
                    <TextInput placeholder="Type your message....." style={styles.typingArea} onChangeText={(mes) => {
                        setMess(mes)
                        setDef(mes)
                    }} value={def} />
                    <View style={styles.imgs}>
                        <Avatar source={emoji} size={20} containerStyle={{ left: -50, top: 3 }} onPress={() => props.nav.navigate('EmojiScreen')} />
                        <TouchableOpacity style={styles.resp} onPress={() => sendHandler("flag")}>
                            <Text style={styles.send}>Send</Text>
                        </TouchableOpacity>
                        <Avatar source={pin} size={20} onPress={() => Gallery()} containerStyle={{ left: 80 }} />
                        <Avatar source={camera} size={20} containerStyle={{ left: 40 }} onPress={() => Camera()} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#5468FF',
        padding: 10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    boxTwo: {
        backgroundColor: '#E8F0F6',
        padding: 10,
        alignContent: 'center'

    },
    cardListOne: {
        flex: 6,
    },

    cont: {
        flex: 1,
        width: '100%'
    },
    cross: {
        flex: 1.5,
        alignItems: 'center',
        backgroundColor: '#FFFFFF00',
        width: '100%',
    },
    footer: {
        flex: 2.5,
    },
    imgA: {
        height: 20,
        width: 20,
        // left: 20,

    },
    imgB: {
        height: 20,
        width: 20,
        // left: 260,
    },
    imgC: {
        height: 20,
        width: 20,
        // left: 280,

    },
    imgD: {
        height: 20,
        width: 20,
    },
    imgE: {
        height: 20,
        width: 20,

    },
    imgF: {
        height: 20,
        width: 20,
        left: 50,
    },
    imgs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: 5,
    },
    imgTwo: {
        height: 10,
        width: 15,
        right: 10,
        top: 3,
    },
    messageDisplay: {
        flex: 8,
        top: -20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: -10,
        paddingHorizontal: 5,
        paddingTop: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,

    },
    msg: {
        fontSize: 12,
        color: '#FFF',
    },
    msgTwo: {
        fontSize: 12,
        color: '#000000',
    },
    oneSide: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    resp: {
        left: 120,
    },
    secondSide: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    send: {
        color: 'green',
    },
    textPart: {
        justifyContent: 'space-between',
        // left: 10,

    },
    textPartTwo: {
        justifyContent: 'space-between',
        right: 10,

    },
    time: {
        color: '#9FB5C6',
        fontSize: 11,
        top: 3,
    },
    timeTwo: {
        color: '#9FB5C6',
        fontSize: 11,
        top: 3,
        right: 20,
    },
    typingArea: {
        height: '30%',
        flexDirection: 'row',
        top: 40,
        borderRadius: 35,
        paddingLeft: 60,
        backgroundColor: '#E8F0F6',
    }

})