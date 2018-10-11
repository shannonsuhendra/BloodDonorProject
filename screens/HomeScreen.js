import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from '../components/SliderEntry';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Button, Text, Card} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export const CAROUSEL = [
  { image: '../assets/images/img1.jpg'},
  { image: '../assets/images/img1.jpg'},
  { image: '../assets/images/img1.jpg'},
  { image: 'https://i.imgur.com/UYiroysl.jpg'},
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderItem({item, index}){
    return <SliderEntry data={item}/>;
  }

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text h4 style ={styles.titleText}>
              Liquid Life
            </Text>
            <Text h5 style ={styles.subtitleText}>
              we share because we care
            </Text>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View>
            <Carousel
            ref={c => this._slider1Ref = c}
            data={CAROUSEL}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            />
          </View>

          <Card style={styles.AboutUs}>
            <Text style={styles.AboutUsTitle}>
              About Us:
            </Text>
            <Text style ={styles.AboutUsText}>
            Despite being the world's fourth largest population, the Red Cross in Indonesia is 
            always low on blood supplies due to a lack of donors. To solve this problem, once every three months,
            we hold a blood donor event.
            </Text>
          </Card>

          <Card style={styles.Mission}>
            <Text style={styles.MissionTitle}>
              Mission:
            </Text>
            <Text style={styles.MissionText}>
            Get people to donate blood for the Red Cross.
            </Text>
          </Card>

          <View style={styles.NextEvent}>
              <Button 
                onPress={this._NextPress} 
                style={styles.NextLink}
                title="Come join us at our next event!"
                backgroundColor="#ff0000"
                rightIcon={{name: 'caret-right', type: 'font-awesome'}}
              />
          </View>
        </ScrollView>
    );
  }

  
  _NextPress = () => {
    //WebBrowser.openBrowserAsync(
    //  'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    this.props.navigation.navigate('NextEvent')
    
  };
}

const styles = StyleSheet.create({
  titleText:{
    fontWeight: 'bold',
    color:"#ff0000",
    fontFamily: 'MarkerFelt-Thin',
    fontSize: 40
  },
  subtitleText:{
    fontSize:18,
    fontFamily: 'Menlo-Bold'
  },
  Mission:{
    marginBottom: 20,
  },
  AboutUsTitle:{
    fontSize:18,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  AboutUsText:{
    fontSize:16,
    fontFamily: 'Times New Roman'
  },
  MissionTitle:{
    fontSize:18,
    fontFamily: 'TimesNewRomanPS-BoldMT'
  },
  MissionText:{
    fontSize:16,
    fontFamily: 'Times New Roman',
  },
  NextEvent:{
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 1000,
    height: 60,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  
});
