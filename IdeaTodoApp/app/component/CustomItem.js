import React, { Component } from 'react';
import {
    Animated,
  } from "react-native";

export default class CustomItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scaleValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration :1500,
            useNativeDriver: true,
            delay: this.props.index * 500
        }).start();
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.scaleValue }}>
                { this.props.children }
            </Animated.View>
        );
    }
}