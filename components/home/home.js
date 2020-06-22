/* REACT */
import React, { Component } from "react";
import { View,TextInput } from "react-native";
/* Styles */
import HomeStyles from './homeStyles';
/* Maps */
/* import MapContainer from '../../core/google_maps/googleApiWrapper'; */
import MapView from 'react-native-maps'; 
//import { withGoogleMap,GoogleMap, Marker } from "react-google-maps";
/* import MyMapComponent from '../map/map'; */
/* Services */
import HomeService from '../../services/home/homeService';


export class Home extends Component{

    
    constructor(){
        super(); 
    }

    home(){
        return (
            
            <View style={HomeStyles.Container}>
                <TextInput  placeholder='Introduzca un destino' 
                            style={HomeStyles.txtSearch} 
                            onChangeText = {(text)=>this.setState({searchText:text})}
                            onSubmitEditing={()=>this.getMarkers(this.state.searchText)}/>
                {/* <MapContainer style={{marginTop:'10'}}></MapContainer> */}
                 <MapView   style={HomeStyles.mapView} 
                            initialRegion={{
                                                latitude: 18.4679234,
                                                longitude: -69.8014122,
                                                latitudeDelta: 0.0922,
                                                longitudeDelta: 0.0421,
                                            }}/> 
                {/* <MyMapComponent></MyMapComponent> */}
                
            </View>
        );
    }

    async getPlacesInfo(address){

        let places = await HomeService.getPlaces(address);
        let placesResult = places.results; //Arreglo que contiene los datos de los lugares obtenidos desde la API.
        let coordinates = [];

        placesResult.forEach(element => {
            coordinates.push({placeId:element.place_id,coordinates:element.geometry.location});
            
        }); 

        console.log(coordinates);

        return places ;
    }

    options(){

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