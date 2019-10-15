import React from 'react';
import {View} from 'react-native';
import Menu from './menu';
import Header from './Header';
import Story from './Story';
import Bottom from './footer';

function Main(){
    return(
        <View style={{flex:1}}>

            <Menu />
            <Header style={{backgroundColor:"green"}}/>
            <Story/>
            <Bottom />
 
        </View>
    )
}

export default Main;