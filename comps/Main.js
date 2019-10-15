import React from 'react';
import {View} from 'react-native';
import Story from './Story';
import Bottom from './footer';
import Menu from './menu';

function Main(){
    return(
        <View style={{flex:1}}>

            <Menu />
            <Story/>
            <Bottom />
   
        </View>
    )
}

export default Main;