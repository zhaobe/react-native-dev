/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View} from 'react-native';

class Greetings extends Component {
    render() {
        return (
            <Text>Hi {this.props.name}, nice to meet you.</Text>
        );
    }
}

class Blinks extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //set interval to 2 seconds
        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            });
        }, 2000);
    }
    render() {
        //ternary for display
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={{color: 'red'}}>{display}</Text>
        );
    }
}

export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    OR
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                    {'\n'}
                </Text>
                <Image source={require('./img/react-native-congratulations.png')} style={{width: 200, height: 200, margin: 10}}/>
                <Greetings name='Bob' />
                <Text style={styles.instructions}>
                    {'\n'}The greeting above does not take {'\n'}
                    inline-styling since it is a component of itself.
                </Text>
                <Blinks text="I should be blinking every so often."/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 4
    },
    instructions: {
        textAlign: 'center',
        color: '#000000',
        marginBottom: 5,
        fontWeight: 'bold'
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
