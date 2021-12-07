import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import NewGroup from '../assets/New-Group.png';
import GroupTitle from '../assets/Group-Title.png';
import Tag from '../assets/Tags.png';

import HeaderBack from '../components/HeaderBack';

export default function NewGroupScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <HeaderBack title="Create a New Group"/>
            </View>
            <View style={styles.GroupImg}>
                <Image source={NewGroup} style={styles.imgTwo} />
            </View>
            <View style={styles.groupTitle}>
                <Text style={styles.titleText}>Group Title</Text>
                <View style={styles.inputTitle}>
                    <Image source={GroupTitle} style={styles.icon} />
                    <TextInput defaultValue="English Speaking" style={styles.input}/>
                </View>
                
            </View>
            <View style={styles.tagTitle}>
                <Text style={styles.titleTag}>Tags</Text>
                <View style={styles.inputTitle}>
                    <Image source={Tag} style={styles.iconTag} />
                    <TextInput defaultValue="#Sports,#Sports" style={styles.input}/>
                </View>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.btnTags}>
                    <Text style={styles.textBtn}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTagsTwo}>
                    <Text style={styles.textBtnTwo}>Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTagsTwo}>
                    <Text style={styles.textBtnTwo}>Reading</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.proficiency}>
                <Text style={styles.textProficiency}>Proficiency Level</Text>
                <View style={styles.btnsTwo}>
                    <TouchableOpacity style={styles.profBtn}>
                        <Text>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profBtn}>
                        <Text>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profBtn}>
                        <Text>Advanced</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profBtnTwo}>
                        <Text>Any level</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.groupMembers}>
                <Text style={styles.textProficiency}>Group Members</Text>
                <View style={styles.btnsTwo}>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numFour} >
                        <Text style={styles.textFour}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numBtn} >
                        <Text style={styles.numText}>8</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.appButtonContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GroupsScreen')}>
                    <Text style={styles.appButtonText}>CREATE GROUP</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        flex: 2.3,
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
        marginBottom: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    btns: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        top: 40,

    },
    btnTags:{
        backgroundColor: "#5468FF",   
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#DFE9F1',
        justifyContent: 'center',
        paddingHorizontal: 30,
        elevation:5,

    },
    btnTagsTwo:{
        backgroundColor: "#FFF",   
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#DFE9F1',
        justifyContent: 'center',
        paddingHorizontal: 30,
        elevation: 5,
    },
    btnsTwo:{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',

    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    first:{
        flex: 1.5,
    },
    foot: {
        flex: 2,
    },
    GroupImg: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    groupMembers: {
        flex: 1.5,
        top: 25,
    },
    groupTitle: {
        flex: 1.5,
        marginHorizontal: 20,
        top: 20,
    },
    
    icon: {
        height: 20,
        width: 30,
        left:20,
    },
    iconTag: {
        height: 20,
        width: 20,
        left: 15,
    },
    imgTwo: {
        height: 120,
        width: 120,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        left: -30,
        paddingLeft: 70,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
        borderColor: '#DFE9F1',
    },
    inputTitle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    numBtn:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 10,
    },
    numFour:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#5468FF',
        elevation: 2,
        borderRadius: 10,
    },
    
    numText:{
        color: '#07051B'
    },
    profBtn:{
        backgroundColor: "#5468FF",   
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#DFE9F1',
        justifyContent: 'center',
        paddingHorizontal: 10,
        elevation: 5,
        paddingVertical: 5,
    },
    profBtnTwo:{
        backgroundColor: "#FFF",   
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#DFE9F1',
        justifyContent: 'center',
        paddingHorizontal: 10,
        elevation: 5,
    },
    proficiency: {
        flex: 1.5,
        top: 40,
    },
    tagTitle:{
        flex: 1.5,
        marginHorizontal: 20,
        top: 20,
        left:10,
    },
    textBtn:{
        fontSize: 18,
        color: '#FFF',
    },
    textBtnTwo:{
        fontSize: 18,
        color: '#07051B',
    },
    textFour:{
        color: '#FFF',
    },
    textProficiency:{
        marginTop: 5,
        marginBottom: 5,
        left: 20,
        fontSize:16,
        color: '#232536',

    },
    titleText: {
        marginBottom: 10,
        fontSize:16,
        color: '#232536'
    },
    titleTag: {
        marginBottom: 15,
        fontSize:16,
        color: '#232536',
        top: 10,
        left: -10,
    },
})