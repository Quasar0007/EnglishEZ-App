  
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
// import ReactSV from './assets/splash-vector.svg'
import logo from '../assets/logo.png';
import splashVector from '../assets/splash-vector.png';

export default function SplashScreen({navigation}) {
  setTimeout(() =>{
    navigation.replace('Home')
  }, 3000)
  return (
    <View style={styles.container}>
      <View style={styles.top}><Image source={logo} style={{ width: 285, height: 200 }}/></View>
      <View style={styles.bottom}><Image source={splashVector} style={{ width: 350, height: 300 }}/></View>
      {/* Any changes in splash-vector.png can be done using the file 'splash-vector.svg' */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5468FF',
  },
  top:{
    flex:1,
    // alignContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom: {
    flex:1,
    alignItems: 'center',
  }
});