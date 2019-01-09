/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {goHome, goToAuth} from "./navigation";

class WelcomeScreen extends Component {

/*
    async componentDidMount() {
        try {


            goToAuth()

        } catch (err) {
            console.log('error: ', err)
            goToAuth()
        }
    }
*/


    goToScreen = (screenName) => {

        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    goToHome = async () => {

        try {
            // login with provider
            goToAuth()
        } catch (err) {
            console.log('error:', err)
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>


                <Button title='Sign In' onPress={() => this.goToScreen('SignIn')}/>

                <Button title='Sign Up' onPress={() => this.goToScreen('SignUp')}
                />

                <Button
                    title='Later'
                    onPress={this.goToHome}
                />

            </View>
        );
    }
}

export default WelcomeScreen;

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
});
