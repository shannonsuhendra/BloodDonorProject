import React from 'react';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import { List, ListItem, Text, colors, Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

const ageData = [
  {
    title: "At least 17 years old"
  },
  {
    title: "No upper age limit as long as you're in fit condition to donate"
  },
]

const weightData = [
  {
    title: "At least 110lbs or 50kg"
  },
]

const travelData = [
  {
    title: "At least 3 months since visit from areas with diseases or sickness"
  },
]

const medicationsData = [
  {
    title: "All medicines currently being consumed or consumed before should be notified to the worker"
  },
]

const tatooData = [
  {
    title: "At least 1 year since piercing or tattoo to ensure no infection"
  },
]

const pregnancyData = [
  {
    title: "Can't donate during pregnancy"
  },
  {
    title: "At least 6 weeks after giving birth"
  },
]




export default class RequirementsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.icon}>
            <Icon name='male-female' type='foundation' color='red'/>
            <Text h5 style={styles.Head}>
                Age:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {ageData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={0}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>

          <View style={styles.icon}>
            <Icon name='weight-kilogram' type='material-community' color='red'/>
            <Text h5 style={styles.Head}>
                Weight:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {weightData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
           </List>

           <View style={styles.icon}>
            <Icon name='plane' type='font-awesome' color='red'/>
            <Text h5 style={styles.Head}>
              Travel:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {travelData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>

          <View style={styles.icon}>
            <Icon name='pill' type='material-community' color='red'/>
            <Text h5 style={styles.Head}>
            Medications:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {medicationsData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={3}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>

          <View style={styles.icon}>
            <Icon name='needle' type='material-community' color='red'/>
            <Text h5 style={styles.Head}>
            Tattoo:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {tatooData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>

          <View style={styles.icon}>
            <Icon name='human-pregnant' type='material-community' color='red'/>
            <Text h5 style={styles.Head}>
            Pregnancy:
            </Text>
          </View>
          <List containerStyle={styles.List}>
           {pregnancyData.map((item) => (
            <ListItem 
              key={item.title}
              title={item.title}
              hideChevron={true}
              containerStyle={styles.ListItem}
              titleStyle={styles.ListItemTitle}
              titleNumberOfLines={2}
              leftIcon={{name: 'asterisk', type: 'foundation', color: 'black', size:10}}
            />
           ))
           }
          </List>
        </ScrollView>
      
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    marginTop: 30,
    width: 1000,
    height: 60,
    resizeMode: 'contain',
  },
  Head:{
    fontSize:16,
    marginLeft:10,
    fontWeight:'bold',
  },
  List:{
    marginTop:0,
    marginBottom:20,
    borderColor:Colors.backgroundColor,
    backgroundColor: Colors.backgroundColor,
  },
  ListItem:{
    marginTop:0,
    marginLeft:20,
    borderBottomColor:Colors.backgroundColor,
    paddingBottom:0,
    paddingTop:5
  },
  ListItemTitle:{
    color:'black'
  },
  icon:{
    flexDirection: 'row',
    marginLeft:20
  }
  

})

