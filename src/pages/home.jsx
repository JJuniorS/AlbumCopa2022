import { StyleSheet, TextInput,Text, View, Image, Linking, TouchableOpacity  } from 'react-native';
import React from "react";

export default function App() {

    const [loginText, onChangeLoginText] = React.useState("");
    const [PasswordText, onChangePasswordText] = React.useState("");

    return (
        <View style={styles.home}>
            <Image style={styles.logoFifa} source={require('../../assets/logoFifa.png')} />
            <TextInput
                style={styles.input}
                placeholder='Login'
                onChangeText={onChangeLoginText}
                value={loginText}
                placeholderTextColor='#c39191'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={onChangePasswordText}
                value={PasswordText}
                placeholderTextColor='#c39191'
            />

            <Text style={{color: '#92B7FF', paddingBottom: 35}}>
                Don't have an account yet?  Sign Up
            </Text>

            <TouchableOpacity style={styles.btnSignIn} title="Sign In" >
                <Text style={{textAlign: 'center', color: '#fff'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    logoFifa: {
        marginTop: 50,
        width: 371,
        height: 500,
        resizeMode: 'contain',
    },

    input: {
        height: 40,
        width: 367,
        margin: 12,
        borderWidth: 1,
        padding: 10,

        borderRadius: 15,
        borderColor: 'white',

        color: 'white',
        backgroundColor: '#8e3030'
    },

    btnSignIn: {
        alignItems: 'center',
        padding:14,
        backgroundColor: '#8e3030',

        width: 280,
        height: 51,
        borderRadius: 35,
    }
});

