import React, { Component, PropTypes } from 'react';
import {View, Text, TouchableHighlight } from 'react-native';

export default class FirstScene extends Component {
    render() {
        return {
            <View>
                <Text>Current Scene: {this.props.title}</Text>

                <TouchableHighlight onPress={this.props.onForward}>
                <Text>Tap here to load the next scene</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onBack}>
                <Text>Tap here to go back</Text>
                </TouchableHighlight>
            </View>
        };
    }
}

FirstScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
