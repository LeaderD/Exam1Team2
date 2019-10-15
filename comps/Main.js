import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import Bottom from './footer';
import Menu from './menu';

function Main(){
    return(
        <View style={{flex:1}}>
          <Menu />
          <Header style={{backgroundColor:"green"}}/>
          <Bottom />
       
        </View>
    )
}

export default Main;