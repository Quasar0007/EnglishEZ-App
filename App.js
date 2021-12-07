import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ChatBotScreen from './screens/ChatBotScreen';
import ChatBotScreenTwo from './screens/ChatBotScreenTwo';
import ChatScreen from './screens/ChatScreen';
import CongoScreen from './screens/CongoScreen';
import GroupCallScreen from './screens/GroupCallScreen';
import GroupCallScreenUpdate from './screens/GroupCallScreenUpdate';
import GroupsScreen from './screens/GroupsScreen';
import HomeScreen from './screens/HomeScreen';
import HomeScreenTwo from './screens/HomeScreenTwo';
import HomeScreenUpdate from './screens/HomeScreenUpdate';
import LoginScreen from './screens/LoginScreen';
import NewGroupScreen from './screens/NewGroupScreen';
import NotificationScreen from './screens/NotificationScreen';
import NumberScreen from './screens/NumberScreen';
import OTPScreen from './screens/OTPScreen';
import OverlayScreen from './screens/OverlayScreen';
import ProfileScreen from './screens/ProfileScreen';
import QuestionScreenOne from './screens/QuestionScreenOne';
import QuestionScreenOneUpdate from './screens/QuestionScreenOneUpdate';
import QuestionScreenTwo from './screens/QuestionScreenTwo';
import SplashScreen from './screens/SplashScreen';
import UserScreen from './screens/UserScreen';
import VideoCallFullScreen from './screens/VideoCallFullScreen';
import VideoCallHalfScreen from './screens/VideoCallHalfScreen';
import VideoCallScreen from './screens/VideoCallScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileHead from './components/ProfileHead';
import NewVideoCallScreen from './screens/NewVideoCallScreen';
import Footer from './components/Footer';
import Chat from './screens/Chat';
import EmojiScreen from './screens/EmojiScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="NumberScreen" component={NumberScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CongoScreen" component={CongoScreen} />
        <Stack.Screen name="QuestionScreenOne" component={QuestionScreenOne} />
        <Stack.Screen name="QuestionScreenTwo" component={QuestionScreenTwo} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileHead" component={ProfileHead} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="NewVideoCallScreen" component={NewVideoCallScreen} />
        <Stack.Screen name="VideoCallFullScreen" component={VideoCallFullScreen} />
        <Stack.Screen name="VideoCallHalfScreen" component={VideoCallHalfScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
        <Stack.Screen name="OverlayScreen" component={OverlayScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="GroupCallScreenUpdate" component={GroupCallScreenUpdate} />
        <Stack.Screen name="GroupCallScreen" component={GroupCallScreen} />
        <Stack.Screen name="EmojiScreen" component={EmojiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

