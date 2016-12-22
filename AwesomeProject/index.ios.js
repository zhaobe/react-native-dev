/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Image, Navigator, ScrollView, StyleSheet, Text, View} from 'react-native';

import FirstScene from './FirstScene';

class Greetings extends Component {
    render() {
        return (
            <Text style={styles.greetings}>Hi {this.props.name}, nice to meet you.</Text>
        );
    }
}
//need to find a way to check componenet mounting for setState,
//ES6 took away isMounted() method
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
            <Text style={styles.blinks}>{display}</Text>
        );
    }
}
//ios simulator not working properly with component below, will need to fix
//TODO: need to fix and integrate into main ScrollView
class UsingFlex extends Component {
    render() {
        return (
            <View style={{width: 10, height: 10, backgroundColor: 'steelblue'}} />
        );
    }
}

class AwesomeProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: 'My First Scene', index: 0 }}
                renderScene={{route, navigator}} =>
                <FirstScene
                    title={route.title}

                    onForward={() => {
                        const nextIdx = route.index + 1;
                        navigator.push({
                            title: 'Scene' + nextIdx,
                            index: nextIdx,
                        });
                    }}

                    onBack={() => {
                        if(route.index > 0) {
                            navigator.pop();
                        }
                    }}
                />
                
            />
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 30
    },
    instructions: {
        textAlign: 'center',
        color: '#000000',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    greetings: {
        textAlign: 'center',
    },
    blinks: {
        textAlign: 'center',
        color: 'red',
        padding: 10
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
