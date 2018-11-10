import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';
import { WebBrowser } from 'expo';
import SliderEntry from '../components/SliderEntry';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import {Text, Card, ListItem, List} from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming Events'
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
            source={{uri: 'https://calendar.google.com/calendar/embed?mode=AGENDA&src=mdiqlmu8a0hvc29rq2slcfv124%40group.calendar.google.com&ctz=Asia%2FJakarta'}}
            style={{}}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  
});
