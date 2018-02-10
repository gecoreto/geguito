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
  StackNavigator,
} from 'react-navigation';
import Home from './app/components/home/home.component';
import GameOne from './app/components/gameOne/gameOne.component';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    GameOne: {
      screen: GameOne
    }

  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions:{
      headerTitle: 'GEGUITOS',
      headerTitleStyle:{
        color: '#FFF'
      },
      headerStyle:{
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

