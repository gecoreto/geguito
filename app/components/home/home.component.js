import React, { Component, DrawerLayoutAndroid, Dimensions } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../footer/footer.component';

export default class Home extends React.Component {
  
  static navigationOptions = {
    header: null,
    headerTitle: '',
    headerTitleStyle:{
      color: '#FFF'
    }
  };

  constructor(props) {
    super(props);
  }



  render() {
    //var width = Dimensions.get('window').width; //full width
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GEGUITOS</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameOne')}>
          <Text style={styles.button}>PIEDRA PAPEL O TIJERA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('GameTwo')}>
          <Text style={styles.button}>TRIQUI</Text>
        </TouchableOpacity>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#4a7e6b',
    paddingHorizontal: 20
  },
  title: {
    textAlign: 'center', fontFamily: 'Copperplate', fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF9800',
    padding: 10,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Cochin',
    fontWeight: 'bold', fontSize: 20,
    margin: 5,
    borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',

  }
});

AppRegistry.registerComponent('Home', () => Home);