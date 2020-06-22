
import {StyleSheet} from 'react-native';

    let LayoutStyles = {

        layout:{
            flex:1,
            flexDirection:'column'
        },
        header: {
            flex:1,
            flexDirection:'row',
            backgroundColor: 'rgb(58, 58, 200)',
            //color:'white',
            alignItems: 'flex-end'
        },
        body: {
            flex:1,
            backgroundColor: "white"
        },
        appName:{
            color:'white',
            fontSize: 20,
            marginLeft:10
        }
    }


export default StyleSheet.create(LayoutStyles);