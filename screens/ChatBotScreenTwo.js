import React from 'react';
import { StyleSheet, View} from 'react-native';
import ChatBotScreen from './ChatBotScreen';

export default function ChatBotScreenTwo(){
    return(
        <View style={styles.container}>
            <ChatBotScreen next = "yes"/>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFF',
    }
})