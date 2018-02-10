import React from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //var width = Dimensions.get('window').width; //full width
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Power by gecoreto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: (Dimensions.get('window').width / 2) - 25,
    backgroundColor: 'black',
    padding: 5
  },
  title: {
    textAlign: 'center', fontFamily: 'Copperplate', fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('Footer', () => Footer);