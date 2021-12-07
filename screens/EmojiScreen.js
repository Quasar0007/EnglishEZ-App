import React from 'react';
import { StyleSheet, View} from 'react-native';
import EmojiSelector, { Categories } from "react-native-emoji-selector";


export default function EmojiScreen() {
    return (
        <View style={styles.cont}>
            <EmojiSelector
                category={Categories.symbols}
                onEmojiSelected={emoji => console.log(emoji)}
                showSearchBar={false}
                showHistory={true}
                columns= '12'
            />
        </View>

    )
}

const styles = StyleSheet.create({
    cont:{
        flex: 0.3,
    }
})
