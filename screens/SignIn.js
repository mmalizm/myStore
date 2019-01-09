/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View , Button , TextInput} from 'react-native';


class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>


                <TextInput placeholder='username' style={styles.text_size}   ></TextInput>

                <TextInput placeholder='password' style={styles.text_size}   ></TextInput>

                <Button title="Register" style={styles.margin_five}  />


            </View>
        );
    }
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    text_size : {
        height : 40,
        width : 240,
        borderWidth:1,
        marginTop : 5,

    },
    margin_five : {
        height : 40,
        width : 140,
        marginTop : 5,
    },
});
