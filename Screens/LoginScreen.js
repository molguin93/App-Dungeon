import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component {

    async _signInWithGoogle() {

        try {
            const result = await Google.logInAsync({
                androidClientId: "846484107528-r4qkrc2ph0j41pi604njbjrcf5v1c9a6.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                try {
                    this.setState({
                        name: result.user.name,
                    })
                    console.log(this.state.name);
                    this.props.onLogin();
                } catch (error) {
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/login.jpg')} style={styles.image}>
                    <View style={styles.button}>
                        <Button
                            onPress={() => this._signInWithGoogle()}
                            title="Iniciar sesión con Google"
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: 'transparent',
        opacity: 20,
        width: 400,
        height: undefined,
    },
    button: {
        alignItems: "center",
        borderRadius: 5,
    }
});
