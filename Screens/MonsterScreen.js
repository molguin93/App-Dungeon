import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';

export class MonsterScreen extends Component {

    state = {
        response: [],
        estado: false,
        value: ''
    }

    handlerText(texto) {
        var campoTexto = texto;
        this.setState({ value: campoTexto });
    }

    handlerButton = () => {
        var monster = this.state.value.split(" ").join("-").toLowerCase();
        console.log(monster);

        try {
            axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`)
                .then(response => {
                    console.log(monster);
                    console.log(response.data);
                    this.setState({
                        response: response.data,
                        estado: true
                    });
                })
                .catch(function (error) {
                    console.log(error);
                    alert('El monstruo no existe');
                });
        } catch (error) {
            console.log(err);
        }
    };



    render() {
        if (this.state.estado != true) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <View style={styles.main}>
                            <Image
                                style={styles.logo}
                                source={require('../img/dungeons-dragons.png')}
                            />
                            <Image
                                style={styles.imgMonster}
                                source={require('../img/monster.png')}
                            />
                            <Text
                                style={styles.titulo}
                            >Indicar Monstruo
                            </Text>
                            <Text
                                style={styles.ejemplos}
                                >Disponibles: aboleth, acolyte, adult black dragon,
                                {"\n"}giant elk, medusa, tribal warrior y nightmare
                            </Text>
                            <TextInput
                                style={styles.input} name='monst' type='text' placeholder='Ej: tribal warrior'
                                onChangeText={this.handlerText.bind(this)}>
                            </TextInput>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.handlerButton.bind(this)}>
                                <Text>Click me</Text>
                            </TouchableOpacity>
                            <StatusBar style="auto" />
                        </View>
                    </ScrollView>
                    </ImageBackground>
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>© Mauro Olguin - 2020</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <View style={styles.main}>
                            <Image
                                style={styles.logo}
                                source={require('../img/dungeons-dragons.png')}
                            />
                            <Image
                                style={styles.imgMonster}
                                source={require('../img/monster.png')}
                            />
                            <Text
                                style={styles.titulo}
                            >Indicar Monstruo
                            </Text>
                            <Text
                                style={styles.ejemplos}
                                >Disponibles: aboleth, acolyte, adult black dragon,
                                {"\n"}giant elk, medusa, tribal warrior y nightmare
                            </Text>
                            <TextInput
                                style={styles.input} name='monst' type='text' placeholder='Ej: tribal warrior'
                                onChangeText={this.handlerText.bind(this)}>
                            </TextInput>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.handlerButton.bind(this)}>
                                <Text>Click me</Text>
                            </TouchableOpacity>
                            <Text
                                style={styles.text}
                            >Name: {this.state.response.name}
                            </Text>
                            <Text
                                style={styles.text}
                            >Size: {this.state.response.size}
                            </Text>
                            <Text
                                style={styles.text}
                            >Type: {this.state.response.type}
                            </Text>
                            <Text
                                style={styles.text}
                            >Alignment: {this.state.response.alignment}
                            </Text>
                            <Text
                                style={styles.text}
                            >Hit Points: {this.state.response.hit_points}
                            </Text>
                            <StatusBar style="auto" />
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>© Mauro Olguin - 2020</Text>
                    </View>
                </View>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    background: {
        flex: 1,
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    text: {
        color: "white",
        fontSize: 16,
        margin: 3,
    },
    titulo: {
        color: "#bb0208",
        fontWeight: "bold",
        fontSize: 20,
    },
    ejemplos: {
        color: "gray",
        fontSize: 12,
        textAlign: "center",
        margin: 5,
    },
    logo: {
        height: 110,
        width: 300,
        marginBottom: 40,
    },
    imgMonster: {
        height: 270,
        width: 180,
        marginBottom: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ff9d23",
        padding: 10,
        margin: 5,
        marginBottom: 10,
        borderRadius: 5,
    },
    input: {
        height: 40,
        width: 300,
        margin: 10,
        padding: 8,
        borderRadius: 10,
        borderColor: '#ff9d23',
        backgroundColor: 'white',
        borderWidth: 3,
    },
    footer: {
        backgroundColor: 'black',
    },
    textFooter: {
        color: 'white',
        textAlign: 'center'
    },
});