import React, { Component } from 'react';
import { View,Text,StatusBar } from 'react-native';
/* Styles */
import LayoutStyles from './layoutStyles';
/* Navigation */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
/* Componentes */
import { Home } from '../home/home';

export default class Layout extends Component{

    Stack = new createStackNavigator();
    constructor(){
        super();
        StatusBar.setBarStyle('ligth-content');
    }

    layout(){
        return(
            <View style={LayoutStyles.layout}>
                {/* <View style={layoutStyles.header}>
                    <Text style={layoutStyles.appName}>LINE UP</Text>
                </View> */}
                <View style={LayoutStyles.body}>
                    <NavigationContainer>
                        <this.Stack.Navigator>
                            <this.Stack.Screen name="Home" component={Home}  options={new Home().options()}></this.Stack.Screen>
                        </this.Stack.Navigator>
                    </NavigationContainer>
                </View> 
            </View>
        );
    }

    render(){
        return (this.layout());
    }
}