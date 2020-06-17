import React, { Component } from 'react';
import layoutStyles from './layoutStyles';
import { View,Text } from 'react-native';

export default class Layout extends Component{

    constructor(){
        super();
    }

    layout(){

        return(
                <View style={layoutStyles.layout}>
                    <View style={layoutStyles.header}>
                        <Text style={layoutStyles.appName}>LINE UP</Text>
                    </View>
                    <View style={layoutStyles.body}>
                        <Text style={layoutStyles.text}>Este es el body</Text>
                    </View>
                </View>
            );
            
    }

    render(){
        return (this.layout());
    }
}