/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Home from './app/components/home/home.component';
import GameOne from './app/components/gameOne/gameOne.component';
import GameTwo from './app/components/gameTwo/gameTwo.component';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    GameOne: {
      screen: GameOne //Piedra papel o tijera
    },
    GameTwo:{
      screen: GameTwo //Triqui
    }
  },
  {
    initialRouteName: 'Home', // Initial view
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: 'GEGUITOS',
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold', fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#4a7e6b'
      }
    }
  }
);

export default class App extends Component<{}> {
  render() {
    return <RootStack />;
  }
}

