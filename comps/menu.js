import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import menuStyles from '../styles/menu-styles';

function Menu(){

    return(
        <View>
<Image
style={menuStyles.img}
source={require('../images/menu.png')} />




        </View>
    )
}

export default Menu;