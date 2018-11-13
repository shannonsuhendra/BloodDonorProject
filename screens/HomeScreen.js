import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text, ListItem, List, Button} from 'react-native-elements';
import Colors from '../constants/Colors';
//import i18n from 'i18n-js'
//import {Localization} from 'expo-localization'

//const en ={
//  nextEvent: 'Next Event:',
//  upcomingEvents: 'Upcoming Events!',
//  learn: 'Learn More About Us!'
//}

//const id ={
//  nextEvent: 'Acara Selanjutnya:',
//  upcomingEvents: 'Acara Mendatang!',
//  learn: 'pelajari lebih lanjut tentang kami'
//}

//i18n.fallbacks = true;
//i18n.translations = {id, en};
//i18n.locale = "en-US";
//i18n.locale = "id-ID"
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text h4 style ={styles.titleText}>
              Liquid Life
            </Text>
            <Image
              source={
                require('../assets/images/heart.png')
              }
              style={styles.welcomeImage}
            />
            <Image
            source={
                require('../assets/images/picture.jpg')
              }
              style={styles.picture}
            />
          </View>
          <Text style={styles.NextEvent}>
              Next Event:
          </Text>
          <List containerStyle={styles.List} > 
              <ListItem
                title="17 February 2019"
                hideChevron={true}
                leftIcon={{name:'event', type: 'MaterialIcons', color: 'red'}}
                containerStyle={styles.ListItem}
                titleStyle={styles.ListItemTitle}
              />
              <ListItem
                title="09.00 - 12.00"
                hideChevron={true}
                leftIcon={{name:'access-time', type: 'MaterialIcons', color: 'red'}}
                containerStyle={styles.ListItem}
                titleStyle={styles.ListItemTitle}
              />
              <ListItem
                title={
                  <View>
                    <Text style={styles.ListItemTitle}>Taman Grisenda Blok E2/2</Text>
                    <Text style={styles.ListItemTitle}>Pantai Indah Kapuk</Text> 
                    <Text style={styles.ListItemTitle}>Jakarta Utara</Text>
                  </View>
                }
                hideChevron={true}
                leftIcon={{name:'location-on', type: 'MaterialIcons', color: 'red'}}
                titleNumberOfLines={3}
                containerStyle={styles.ListItem}
              />
          </List>
          
          <View style={styles.Calendar}>
              <Button 
                onPress={this._CalendarPress} 
                style={styles.CalendarLink}
                title="Upcoming Events!"
                backgroundColor="#ff0000"
                rightIcon={{name: 'caret-right', type: 'font-awesome'}}
              />
          </View>

          <View style={styles.AboutUs}>
              <Button 
                onPress={this._NextPress} 
                style={styles.NextLink}
                title="Learn More About Us!"
                backgroundColor="#ff0000"
                rightIcon={{name: 'caret-right', type: 'font-awesome'}}
              />
          </View>          
        </ScrollView>
    );
  }

  //_LanguagePress = () => {
  //  i18n.locale = "id-ID"
  //  console.log("language")
  //}

  _CalendarPress = () => {
    //WebBrowser.openBrowserAsync(
    //  'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    this.props.navigation.navigate('Calendar')
    
  };

  _NextPress = () => {
    //WebBrowser.openBrowserAsync(
    //  'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    this.props.navigation.navigate('AboutUs')
    
  };
}

const styles = StyleSheet.create({
  titleText:{
    fontWeight: 'bold',
    color:"#ff0000",
    fontFamily: Platform.OS === 'ios' ? 'MarkerFelt-Thin' : 'normal',
    fontSize: 40
  },
  AboutUs:{
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
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
  List:{
    marginLeft:20,
    marginRight:20,
    backgroundColor: Colors.backgroundColor
  },
  ListItemTitle:{
    fontSize:20,
    color: 'black',
  },
  picture:{
    marginTop: 20,
    resizeMode: 'contain',
    width: 500,
    height: 150
  },
  Calendar:{
    marginTop:15
  },
  NextEvent:{
    fontSize:25,
    marginLeft:20,
    textAlign: 'left'
  }
});
