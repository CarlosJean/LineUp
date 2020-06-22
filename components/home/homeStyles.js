
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

 let HomeStyles = {
     
        Container:{
            flex:1, 
            flexDirection:'column'
        },
        txtSearch:{
            marginTop:10,
            shadowRadius:5,
            shadowColor:'black',
            padding:10,
            width:'95%',
            alignSelf:'center',
            backgroundColor:'#E8E8E8',
            color:'black',
            borderRadius:10
        },
        mapView:{
            flex: 1,
            marginTop:10
        }

    };

export default StyleSheet.create(HomeStyles); 