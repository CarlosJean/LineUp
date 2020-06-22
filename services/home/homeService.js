//import React from 'react';
import Core from '../../core/core';

 export default functions = {

    getPlaces:  async address =>{

        try{

            let uri = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+Core.GOOGLE_MAPS_API_KEY;
            let encodedUri = encodeURI(uri);

            //console.log(encodedUri);
             let response =   await fetch(encodedUri,{method:'GET'})
                                            /* .then((response)=>response.json()) */;

             let responseJson = await response.json();
            //console.log('Response from service: '+JSON.stringify(response));
            //console.log(responseJson);
            return /* JSON.stringify( */responseJson/* ) */;
        }catch(error){ console.error(error); }
    }

}; 
/* 
export default async function getPlaces(address){

    try{

        let uri = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+Core.GOOGLE_MAPS_API_KEY;
        let encodedUri = encodeURI(uri);

        //console.log(encodedUri);
         let response =   await fetch(encodedUri,{method:'GET'})
                                        .then((response)=>response.json());

        console.log('Response from service: '+JSON.stringify(response));
        return JSON.stringify(response);

    }catch(error){ console.error(error); }
};
 */

//export default functions;