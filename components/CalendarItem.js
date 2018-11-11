import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';

export default class CalendarItem extends Component {


    render () {

        return (
            <View style={styles.calendarItem}>
                <View style={styles.calendar}>
                    <Text style={styles.calendarDate}>
                        {this.props.date}
                    </Text>
                    <Text style={styles.calendarMonth}>
                        {this.props.month}
                    </Text>
                </View>
            <View style={styles.calendarDetail}>
                <Text style={styles.calendarDetailText}>
                    {this.props.detail}
                </Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    calendarItem:{
        flexDirection: 'row',
        marginLeft: 20,
        marginRight:20,
        paddingTop:20,
        paddingBottom:20,
        borderBottomColor: '#555555',
        borderBottomWidth: 0.5
      },
      calendar:{
        flex: 1,
        flexDirection: 'column'
      },
      calendarDate:{
        fontSize: 30,
        textAlign: 'center'
      },
      calendarMonth:{
        fontSize: 20,
        textAlign: 'center'
      },
      calendarDetail:{
        flex: 3,
        borderRadius: 1,
        borderWidth:0.5,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        paddingBottom: 20,
        backgroundColor: 'white'
      },
      calendarDetailText:{
          fontSize: 15
      }
})