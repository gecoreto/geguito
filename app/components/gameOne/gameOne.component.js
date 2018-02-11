import React, { Component } from 'react';
import {
    AppRegistry, Text, View, TextInput, Switch, StyleSheet, TouchableOpacity, Image,
    Animated
} from 'react-native';


export default class GameOne extends React.Component {
    iconPiedra = require('../../../assets/images/piedra.png');
    iconPapel = require('../../../assets/images/papel.png');
    iconTijera = require('../../../assets/images/tijera.png');

    constructor() {
        super();
        this.springValuePi = new Animated.Value (1);
        this.springValuePa = new Animated.Value (1);
        this.springValueTi = new Animated.Value (1);
        this.state = {
            tuSeleccion: false,
            maquinaSeleccion: false,
            resultado: false,
            backgroundResultado: ''
        }
    }

    spring(value) {
        value.setValue(0.3)
        Animated.spring(
            value,
            {
                toValue: 1,
                friction: 10,
                useNativeDriver: true
            }
        ).start()
    }

    onPress = (seleccion) => {
        var icon = '';
        var valorSel = 0;
        switch (seleccion) {
            case 'piedra':
                icon = require('../../../assets/images/piedra.png');
                valorSel = 1;
                this.spring(this.springValuePi);
                break
            case 'papel':
                icon = require('../../../assets/images/papel.png');
                valorSel = 1;
                this.spring(this.springValuePa);
                break
            case 'tijera':
                icon = require('../../../assets/images/tijera.png');
                valorSel = 1;
                this.spring(this.springValueTi);
                break
        }

        this.setState({
            tuSeleccion: icon //<Image source={icon} />
        })
        this.jugar(seleccion);
    }

    jugar = (seleccion) => {
        var icon = '';
        var opcion = '';
        var resultado = '';
        var backgroundResultado = '';
        var aleatorio = Math.floor(Math.random() * (4 - 1)) + 1;
        switch (aleatorio) {
            case 1:
                icon = require('../../../assets/images/piedra.png');
                opcion = 'piedra';
                break
            case 2:
                icon = require('../../../assets/images/papel.png');
                opcion = 'papel';
                break
            case 3:
                icon = require('../../../assets/images/tijera.png');
                opcion = 'tijera';
                break
        }

        if (seleccion == opcion) {
            resultado = 'Empate';
            backgroundResultado = '#FFC107';
        } else if (seleccion == 'piedra') {
            if (opcion == 'papel') {
                resultado = 'Perdiste';
                backgroundResultado = '#B71C1C';
            } else {
                resultado = 'Ganaste!!';
                backgroundResultado = '#64DD17';
            }
        } else if (seleccion == 'papel') {
            if (opcion == 'tijera') {
                resultado = 'Perdiste';
                backgroundResultado = '#B71C1C';
            } else {
                resultado = 'Ganaste!!';
                backgroundResultado = '#64DD17';
            }
        } else if (seleccion == 'tijera') {
            if (opcion == 'piedra') {
                resultado = 'Perdiste';
                backgroundResultado = '#B71C1C';
            } else {
                resultado = 'Ganaste!!';
                backgroundResultado = '#64DD17';
            }
        }

        this.setState({
            maquinaSeleccion: icon,
            resultado: resultado,
            backgroundResultado: backgroundResultado
        })
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#4a7e6b' }}>
                <View style={{ alignItems: 'center', padding: 10, height: 100 }}>
                    <Text style={styles.titleText}> Selecciona una opción </Text>
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity
                        style={[styles.piedra, {transform: [{scale: this.springValuePi}]}]}
                        onPress={() => this.onPress('piedra')}
                    >
                        <Image style={styles.image} source={this.iconPiedra} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.papel, {transform: [{scale: this.springValuePa}]}]}
                        onPress={() => this.onPress('papel')}
                    >
                        <Image style={styles.image} source={this.iconPapel} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tijera, {transform: [{scale: this.springValueTi}]}]}
                        onPress={() => this.onPress('tijera')}
                    >
                        <Image style={styles.image} source={this.iconTijera} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 50,
                    paddingRight: 50,
                }}>
                    <View style={{ width: 150, height: 50, alignItems: 'center' }}>
                        {(this.state.tuSeleccion != false) ? <Image style={styles.image} source={this.state.tuSeleccion} /> : null}
                        <Text style={styles.titleText}> {(this.state.tuSeleccion != false) ? 'Tu' : null} </Text>
                    </View>
                    <View style={{ width: 150, height: 50, alignItems: 'center' }} >
                        {(this.state.maquinaSeleccion != false) ? <Image style={styles.imageMaquina} source={this.state.maquinaSeleccion} /> : null}
                        <Text style={styles.titleText}> {(this.state.maquinaSeleccion != false) ? 'Maquina' : null} </Text>
                    </View>
                </View>
                {
                    (this.state.resultado != false)
                        ?
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: this.state.backgroundResultado,
                            padding: 10
                        }}>
                            <Text style={{
                                fontFamily: 'Cochin',
                                color: '#FFFFFF',
                                fontSize: 50,
                                fontWeight: 'bold'
                            }}> {this.state.resultado} </Text>
                        </View>
                        :
                        null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerButtons: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    titleText: {
        fontFamily: 'Cochin',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    piedra: {
        // width: 80, height: 40,
        alignItems: 'center',
        // backgroundColor: '#006064',
        // padding: 10
    },
    papel: {
        // width: 80, height: 40,
        alignItems: 'center',
        // backgroundColor: '#33691E',
        // padding: 10
    },
    tijera: {
        // width: 80, height: 40,
        alignItems: 'center',
        // backgroundColor: '#827717',
        // padding: 10
    },
    containerFooter: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    buttonFooter: {
        alignItems: 'center',
        backgroundColor: '#558B2F',
        padding: 10
    },
    image: {
        width: 100,
        height: 100,
        // transform: [{rotate: '90 deg'}]
    },
    imageMaquina: {
        width: 100,
        height: 100,
        transform: [{ rotate: '270 deg' }]
    }
})

AppRegistry.registerComponent('GameOne', () => GameOne);