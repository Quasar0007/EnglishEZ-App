import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import email from '../assets/Email.png';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.started}>
        <Text style={styles.topText}>Sign up to get started</Text>
        <Text style={styles.botText}>By signing up you agree to our T&C</Text>
      </View>
      <View style={styles.signup}>
        <TouchableOpacity style={styles.google}>
          <Image source={google} style={styles.img} />
          <View style={styles.verticalLine}></View>
          <Text style={styles.googleText}>Signup Using Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebook}>
          <Image source={facebook} style={styles.fbimg} />
          <View style={styles.fbverticalLine}></View>
          <Text style={styles.fbText}>Signup Using Facebook</Text>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        <TouchableOpacity style={styles.google} onPress={() => navigation.navigate('NumberScreen')}>
          <Image source={email} style={styles.mailimg} />
          <View style={styles.mailverticalLine}></View>
          <Text style={styles.mailText}>Signup Manually</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signin}>
        <Text style={styles.member}>Already our member?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botText: {
    fontSize: 16,
    paddingTop: 10,
    color: '#9FB5C6'
  },
  button:{
    backgroundColor: '#5468FF',
    height: '30%',
    width: '30%',
    top: 18,
    borderRadius: 10,
    elevation: 10,
  },
  buttonText:{
    fontSize: 20,
    color: '#FFFFFF',
    top: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook:{
    flexDirection: 'row',
    backgroundColor: '#4867AA',
    width: '90%',
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,

  },
  fbimg:{
    height: 30,
    width: 15,
    marginLeft: 0,
    // paddingLeft: 15,

  },
  fbText:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '900',
    marginLeft: -15,

  },
  fbverticalLine:{
    height: '45%',
    width:1,
    backgroundColor: '#FFFFFF',
    marginLeft: -9,

  },
  google: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  googleText: {
    fontSize: 20,
    color: '#2D3B4E',
    fontWeight: '900',
    marginLeft: -40,
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: -30,
  },
  mailimg:{
    width: 30,
    height: 30,
    marginLeft: -30,
  },
  mailverticalLine:{
    height: '40%',
    width: 1,
    backgroundColor: '#909090',
    marginLeft: -40,
    opacity:0.4

  },
  mailText:{
    fontSize: 20,
    color: '#2D3B4E',
    fontWeight: '900',
    left: -40,
  },
  member:{
    fontSize: 20,
    color: '#9FB5C6',
    fontWeight: 'bold',
  },
  or:{
    fontSize: 20,
  },
  signin: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 50,
    alignContent: 'center',
  },
  signup: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  started: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3B4E',
  },
  verticalLine: {
    height: '40%',
    width: 1,
    backgroundColor: '#909090',
    marginLeft: -40,
    opacity:0.4
  }
});
