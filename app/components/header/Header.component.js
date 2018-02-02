import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Header extends Component{
    
    render(){
        return(
                <Text style={{textAlign: 'center',backgroundColor: '#3F51B5', height: 60, fontFamily: 'Cochin', fontSize: 30,
                fontWeight: 'bold',
                color: '#FFFFFF'}}>Geguito</Text>
        );
    }

}

AppRegistry.registerComponent('Header', () => Header);