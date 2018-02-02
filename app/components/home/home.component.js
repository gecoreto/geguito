import React, { Component, DrawerLayoutAndroid, Dimensions } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet } from 'react-native';
import Header from '../header/Header.component';
import Footer from '../footer/footer.component';
import Content from '../content/content.component';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //var width = Dimensions.get('window').width; //full width
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    height: 60,
    backgroundColor: 'powderblue',
    paddingTop: 20,
    paddingBottom: 20
  },
  content: {
    flex: 1,
    backgroundColor: '#C5CAE9' //'#f3717b'
  },
  footer: {
    height: 50,
    backgroundColor: 'steelblue',
  }
});

AppRegistry.registerComponent('Home', () => Home);