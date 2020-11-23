import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking, ImageBackground } from 'react-native';

export class InfoScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    <View style={styles.main}>
                        <Image
                            style={styles.logo}
                            source={require('../img/dungeons-dragons.png')}
                        />
                        <Text style={styles.texto}>
                            La APP esta desarrollada en ReactNative, utilizando como La API de la quinta edición 
                            de Dungeons & Dragons, llamada dnd5eapi, para obtener los datos de las consultas. 
                        </Text>
                        <Text style={styles.texto2}>
                            Para poder familiarizarce con la API y saber más acerca de la misma, se pueden dirigir
                            a la documentacion de la misma, entrando al link:      
                            <Text style={{color: '#4285f4'}}
                                onPress={() => Linking.openURL('http://www.dnd5eapi.co/docs/')}> dnd5eapi
                            </Text>
                            , dicha documentación debería ayudarlo a familiarizarse con los recursos disponibles 
                            y cómo consumirlos con solicitudes HTTP.
                        </Text>
                        <StatusBar style="auto" />
                    </View>
                </ScrollView>
                </ImageBackground>
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
        paddingVertical: 30,
    },
    texto: {
        justifyContent: 'center',
        textAlign: 'center',
        color: "orange",
        fontWeight: "bold",
        fontSize: 20,
    },
    texto2: {
        margin: 15,
        justifyContent: 'center',
        textAlign: 'center',
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
    logo: {
        height: 110,
        width: 300,
        marginBottom: 40,
    },
    footer: {
        backgroundColor: 'black',
    },
    textFooter: {
        color: 'white',
        textAlign: 'center'
    },
  });