/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View} from 'react-native';

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
                    {"\n"}
                </Text>
                <Image source={require('./img/react-native-congratulations.png')} style={{width: 200, height: 200}}/>
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
