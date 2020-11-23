import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
                    <View style={styles.main}>
                        <Image
                            style={styles.logo}
                            source={require('../img/dungeons-dragons.png')}
                        />
                        <Text
                            style={styles.titulo}>Bienvenido a la App donde podrás encontrar
                            información acerca de este excelente y tan jugado videojuego. 
                        </Text>
                        <Image
                            style={styles.imagen1}
                            source={require('../img/human.png')}
                        />
                        <StatusBar style="auto" />
                    </View>
                    </ImageBackground>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.textFooter}>© Mauro Olguin - 2020</Text>
                </View>
            </View>
        );
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
        paddingVertical: 20,
    },
    logo: {
        height: 110,
        width: 300,
        marginBottom: 40,
    },
    imagen1: {
        height: 400,
        width: 300,
        marginTop: 20,
    },
    titulo: {
        justifyContent: 'center',
        textAlign: 'center',
        color: "orange",
        fontWeight: "bold",
        fontSize: 20,
    },
    footer: {
        backgroundColor: 'black',
    },
    textFooter: {
        color: 'white',
        textAlign: 'center'
    },
});