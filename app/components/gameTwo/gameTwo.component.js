import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Alert,
    Button,
    TouchableOpacity
} from 'react-native';
import GridView from 'react-native-super-grid';

const items = [
    { ide: 1, name: '', code: '#00695C', isSelect: false },
    { ide: 2, name: '', code: '#00695C', isSelect: false },
    { ide: 3, name: '', code: '#00695C', isSelect: false },
    { ide: 4, name: '', code: '#00695C', isSelect: false },
    { ide: 5, name: '', code: '#00695C', isSelect: false },
    { ide: 6, name: '', code: '#00695C', isSelect: false },
    { ide: 7, name: '', code: '#00695C', isSelect: false },
    { ide: 8, name: '', code: '#00695C', isSelect: false },
    { ide: 9, name: '', code: '#00695C', isSelect: false }
];

export default class GameTwo extends Component {

    constructor(props) {
        super(props);
        this.onPressRow.bind(this);
        this.onPressReset.bind(this);
        this.state = {
            data: items,
            ficha: 'X'
        }
    }

    onPressRow(item, itemId) {
        if (item.isSelect)
            return
        item.isSelect = !item.isSelect;
        item.name = this.getFicha();
        item.code = '#80CBC4';
        var dataClone = this.state.data;
        let selected = {};
        dataClone.forEach((element, i) => {
            selected[element.ide] = element.name;
            if (element.ide == itemId) {
                dataClone[i] = item;
            }
        });
        this.setState({
            data: dataClone
        });
        this.validarGanador(selected);
    }

    getFicha() {
        let fichaActual = this.state.ficha
        this.setState({ ficha: (this.state.ficha == 'X') ? 'O' : 'X' });
        return fichaActual;
    }

    validarGanador(selected) {
        // console.log('selected', selected);
        let gano = false;
        options = ['1,2,3', '4,5,6', '7,8,9', '1,4,7', '2,5,8', '3,6,9', '1,5,9', '3,5,7'];
        options.forEach((opt) => {
            var opts = opt.split(',');
            let select1 = selected[opts[0]];
            let select2 = selected[opts[1]];
            let select3 = selected[opts[2]];
            if (select1.length > 0 && select2.length > 0 && select3.length > 0) {
                if ((select1 == select2) && (select1 == select3)) {
                    gano = true;
                    Alert.alert(
                        'Resultado',
                        'Gano la ' + select1,
                        [
                            { text: 'OK', onPress: () => this.onPressReset() },
                        ]
                    )
                }
            }
        });
        vacios = 0;
        this.state.data.forEach((elm) => {
            if (elm.name == '') {
                vacios++;
            }
        });
        if (vacios == 0 && gano == false) {
            Alert.alert(
                'Resultado',
                'Empate',
                [
                    { text: 'OK', onPress: () => this.onPressReset() },
                ]
            )
        }
    }

    onPressReset() {
        var dataClone = this.state.data;
        let selected = {};
        dataClone.forEach((item, i) => {
            item.isSelect = false;
            item.name = '';
            item.code = '#00695C';
        });
        this.setState({
            data: dataClone
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GridView
                    itemDimension={100}
                    items={this.state.data}
                    style={styles.gridView}
                    renderItem={(item, i) => (
                        <TouchableHighlight onPress={() => this.onPressRow(item, item.ide)}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                {/* <Text style={styles.style_text}>{item.isSelect ? 'true' : 'false'}   </Text>*/}
                                {/* <Text style={styles.style_text}>{item.ide}   </Text> */}
                            </View>
                        </TouchableHighlight>
                    )}
                />
                <TouchableOpacity onPress={() => { this.onPressReset() }}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: '#FF9800',
                        borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',
                        padding: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 5,
                        borderWidth: 0,
                        borderRadius: 5
                    }}>
                        <Text style={{
                            fontFamily: 'Cochin',
                            color: '#FFFFFF',
                            fontSize: 30,
                            fontWeight: 'bold',
                        }}> Reiniciar </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttonEs: {
        color: "#841584",
        fontSize: 50,
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 60,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

AppRegistry.registerComponent('GameTwo', () => GameTwo);