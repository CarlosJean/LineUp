import React from 'react'
import {GoogleApiWrapper,Map,Marker} from 'google-maps-react';
/* Core */
import Core from '../../core/core'
 
// ...
 
export class MapContainer extends React.Component {
    render(){
        return(
                <Map google={this.props.google}>
                {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
                </Map>
            
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: (Core.GOOGLE_MAPS_API_KEY)
})(MapContainer)