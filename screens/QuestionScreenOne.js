import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import back from '../assets/back.png';
import checked from '../assets/check.png';
import unchecked from '../assets/circle-regular.png';

export default function QuestionScreenOne(props) {
    var ide = props.route.params.identity;
    var navig = props.navigation;
    var prog = styles.progress
    if (props.update === "yes") {
        prog = styles.progressUpdate
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.questionHead}>
                <View style={styles.questionHeadTwo}>
                    <Image source={back} style={styles.img} />
                    <Text style={styles.profileText}>Let's serve you better</Text>
                </View>
                <LinearProgress color="#FFC350" variant="determinate" value={0.7} style={prog} />
            </TouchableOpacity>
            <Text style={styles.question}>Why do you want to Learn English?</Text>
            <Text style={styles.selection}>Please select every relevant</Text>
            <View style={styles.options}>
                <CheckBox
                    title="For my school"
                    checkedIcon={<Image source={checked} style={styles.imgic}/>}
                    uncheckedIcon={<Image source={unchecked} style={styles.imgic}/>}
                    checkedColor="#5468FF"
                    containerStyle={styles.cont}
                    textStyle={styles.txt}
                />
                <CheckBox
                    title="For my college"
                    checkedIcon={<Image source={checked} style={styles.imgic}/>}
                    uncheckedIcon={<Image source={unchecked} style={styles.imgic}/>}
                    checkedColor="#5468FF"
                    containerStyle={styles.cont}
                    textStyle={styles.txt}


                />
                <CheckBox
                    title="For job interview"
                    checkedIcon={<Image source={checked} style={styles.imgic}/>}
                    uncheckedIcon={<Image source={unchecked} style={styles.imgic}/>}
                    checkedColor="#5468FF"
                    containerStyle={styles.cont}
                    textStyle={styles.txt}


                />
                <CheckBox
                    title="For social settings"
                    checkedIcon={<Image source={checked} style={styles.imgic}/>}
                    uncheckedIcon={<Image source={unchecked} style={styles.imgic}/>}
                    checkedColor="#5468FF"
                    containerStyle={styles.cont}
                    textStyle={styles.txt}


                />
                <CheckBox
                    title="Any other reason"
                    checkedIcon={<Image source={checked} style={styles.imgic}/>}
                    uncheckedIcon={<Image source={unchecked} style={styles.imgic}/>}
                    checkedColor="#5468FF"
                    checked={true}
                    containerStyle={styles.cont}
                    textStyle={styles.txt}

                />
            </View>
            <TextInput placeholder="Type here.." style={styles.inputText} />
            <View style={styles.appButtonContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navig.navigate('QuestionScreenTwo',{iden: ide})}>
                    <Text style={styles.appButtonText}>NEXT QUESTION</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        flex: 3,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',


    },
    appButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btn: {
        backgroundColor: "#5468FF",
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        paddingVertical: 25,
        borderRadius: 10,
    },
    cont: {
        backgroundColor: '#FFFFFF',
        elevation: 0,
        borderColor: '#FFFFFF',
        paddingVertical: -10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    img: {
        height: 40,
        width: 40,
        marginRight: 30,
        marginLeft: 20,
    },
    imgic:{
        height: 28,
        width: 28,
    },
    inputText: {
        flex: 2,
        borderColor: '#DFE9F1',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        textAlignVertical: 'top',
        paddingLeft: 20,
        color: '#9FB5C6',
        fontWeight: '900',
    },
    options: {
        flex: 5,
    },
    profileText: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    progress: {
        color: '#FFC350',
        width: '90%',
        marginLeft: 20,
        top: -15,
    },
    progressUpdate: {
        color: '#FFC350',
        width: '90%',
        marginLeft: 20,
        height: '3%'
    },
    question: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 20,
        marginTop: 30,
        color: '#07051B',
        fontWeight: '900',
    },
    questionHead: {
        flex: 3,
        justifyContent: 'space-between',
    },
    questionHeadTwo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5468FF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    selection: {
        flex: 1,
        marginLeft: 20,
        marginTop: -10,
        color: '#344356',
        fontWeight: 'bold',
        opacity: 0.8,

    },
    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#344356',
    }

})