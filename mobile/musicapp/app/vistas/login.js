import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import firebase, { fbauth } from '../config/firebase.js';

const { FacebookAuthProvider } = firebase.auth;

export default class Login extends Component {

    state = {
        user: null
    }
    
    componentWillMount(){
        this.authenticateUser()
    }

    authenticateUser=()=>{
        AccessToken.getCurrentAccessToken().then((data) => {
            const { accessToken } = data
            const credential = FacebookAuthProvider.credential(accessToken)
            // Iniciar sesión de usuario con otra cuenta
            fbauth.signInWithCredential(credential).then((user) => {
                //var currentUser = user;
                this.setState({user})
                // Combine los datos prevUser y currentUser almacenados en Firebase.
                // Nota: cómo manejar esto es específico para su aplicación

                // Después de migrar los datos, borre el usuario duplicado.
                return user.delete().then(function () {
                    // Enlace la credencial de OAuth a la cuenta original
                    return prevUser.linkWithCredential(credential);
                }).then(function () {
                    // Inicia sesión con la credencial recién vinculada.
                    return auth.signInWithCredential(credential);
                });
            }).catch(function (error) {
                console.log("Sign In Error", error);
            });
        })
    }    

    handleLogin = (error, result) => {
        if (error) {
            alert("Login error: " + error.message);
        } else if (result.isCancelled) {
            alert("Login cancelado");
        } else {
            //AccessToken.getCurrentAccessToken().then((data) => {
                //Actions.home()
                this.authenticateUser()
            //})
        }
    }

    handleButtonPress = () => {
        Actions.home()
    }

    render() {

        const continuarButton = (
            <Button onPress={this.handleButtonPress} title="Continuar" />
        )        

        return (
            <ImageBackground style={styles.container} source={require('../img/login_back.jpg')}>
                <Image style={styles.icono} source={require('../img/rn_icon.png')}/>
                <Text style={styles.texto}>DemoApp</Text>
                <Text style={styles.texto}>{this.state.user && this.state.user.displayName}</Text>
                {this.state.user ? continuarButton : <Text></Text>}
                <Text></Text>
                <LoginButton
                    readPermissions={["public_profile", "email"]}
                    onLoginFinished={this.handleLogin}
                    onLogoutFinished={() => alert("Saliste.")} />                
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    texto: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        backgroundColor: 'transparent',
        color: 'red'
    },
    icono: {
        width: 150,
        height: 150,
        marginBottom: 10
    }
});
