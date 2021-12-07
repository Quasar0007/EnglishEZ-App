// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useRef } from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { ExpandingDot } from "react-native-animated-pagination-dots";

// import {LearnEnglish} from '../assets/Learn-English.png'

const WelcomeScreen = ({ navigation }) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  // const { wdh, hgt } = Dimensions.get('window');
  const pressHandler = () => {
    navigation.navigate('LoginScreen')
  }

  const Slider = useRef();


  const renderPagination = () => {
    return (

      <ExpandingDot
        data={slides}
        expandingDotWidth={50}
        scrollX={scrollX}
        inActiveDotOpacity={0.2}
        dotStyle={{
          width: 15,
          height: 8,
          backgroundColor: '#5468FF',
          borderRadius: 5,
          marginHorizontal: 3,
        }}
        containerStyle={{
          bottom: 150,
        }}
      />

    )
  }

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          marginTop: 0,
        }}>
        <Text style={styles.introTitleStyle} onPress={pressHandler}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
        <Text style={styles.otherTextStyle}>
          {item.text2}
        </Text>

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => {
          if (item.key === "s1") {
            Slider.current.goToSlide(1, true)
          }

          else if (item.key === "s2") {
            Slider.current.goToSlide(2, true)
          }
          else {
            navigation.navigate('LoginScreen')
          }

        }
        }>
          <Text style={styles.appButtonText}>{item.btnTitle}</Text>
        </TouchableOpacity>
      </View >
    );
  };


  return (

    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      // onDone={onDone}
      showSkipButton={false}
      // onSkip={onSkip}
      bottomButton
      activeDotStyle={styles.dot}
      // renderNextButton={RenderNextButton}
      renderPagination={renderPagination}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
          useNativeDriver: false,
        }
      )}
      ref={(ref) => (Slider.current = ref)}
    />


  )
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  appButtonContainer: {
    height: 80,
    backgroundColor: "#5468FF",
    borderRadius: 10,
    paddingVertical: 25,
    marginVertical: 120,
    marginHorizontal: 20,
  },
  appButtonText: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    color: '#5468FF',
  },
  introImageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 16,


  },
  introTextStyle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#07051B',
    textAlign: 'center',
    // paddingVertical: 60,
    marginTop: 20,
    // fontFamily: 'Poppins-ExtraLight'

  },
  introTitleStyle: {
    fontSize: 25,
    color: '#07051B',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'right',
    marginTop: 30,
    marginRight: 20,
    fontWeight: '900',
  },
  otherTextStyle: {
    textAlign: 'center',
    marginTop: 10,
    width: 400,
    paddingHorizontal: 16,
    color: 'black',
    fontSize: 18,
    // fontWeight: 'normal'
  },
});


const slides = [
  {
    key: 's1',
    text: 'Learn English',
    title: 'skip',
    text2: 'Learn speaking English by practicing with other folks like you',
    image: require('../assets/Learn-English.png'),
    backgroundColor: '#ffffff',
    btnTitle: 'NEXT'
  },
  {
    key: 's2',
    title: 'skip',
    text: 'Join Group',
    text2: 'Join a group and practise with other members',
    image: require('../assets/Join-Group.png'),
    backgroundColor: '#ffffff',
    btnTitle: 'NEXT'

  },
  {
    key: 's3',
    title: 'skip',
    text: 'Approach People',
    text2: 'Approach people directly and practise with them one on one',
    image: require('../assets/Approach-People.png'),
    backgroundColor: '#ffffff',
    btnTitle: 'SKIP'

  },
];