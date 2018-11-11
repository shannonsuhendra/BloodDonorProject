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
import CalendarItem from '../components/CalendarItem';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';
import { Col } from 'react-native-table-component';

const data = [
    {
        'date': 18,
        'month': 'Dec',
        'detail': 'PIK'
    },
    {
        'date': 20,
        'month': 'Jan',
        'detail': 'PIK'
    },
    {
        'date': 2,
        'month': 'March',
        'detail': 'PIK'
    },
]
export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming Events',
    headerTintColor: 'red',
    headerTitleStyle: {
        color: 'black'
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
            <CalendarItem
              date={item.date}
              month={item.month}
              detail={item.detail}
              key={index}
            />
        ))
        }
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  
  
  
});
