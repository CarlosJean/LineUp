import React, { Component } from "react";
import { View,Text,TextInput } from "react-native";
/* import {HomeStyles} from './homeStyles'; */

export class Home extends Component{
    
    content = 'Home works!';

    constructor(){
        super();
    }

    home(){
        return (
            <View>
                <TextInput placeholder='Introduzca un destino'></TextInput>
                <Text>{this.content}</Text>
            </View>
        );
    }

    homeOptions(){

        return (
            {
                title: 'Pantalla principal',
                headerStyle: {
                  backgroundColor: 'rgb(37, 71, 203)',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }
        );
       
    }

    render(){
        return (this.home());
    }
}