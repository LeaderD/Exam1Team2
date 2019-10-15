import React,{useState} from 'react';
import {
    View, 
    Switch,
    ScrollView
} from 'react-native';
import styles from '../styles/StoryStyles';

function Story(){
    const [BGColor, setBGColor] = useState(false);
    const [Scrollability, setScroll] = useState(false);

    var colorTheme = null
    var scrollScreen = null

    if(BGColor === true){
        colorTheme = (
            <View style={[styles.cont,{backgroundColor:'powderblue'}]}
            >
                <Switch
                value = {BGColor}
                onValueChange={(itemValue) => setBGColor(itemValue)}>
                </Switch>
                <Text style={[styles.cont,{textColor:'#000'}]}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        )
    }

    if(BGColor === false){
        colorTheme = (
            <View style={[style.cont,{backgroundColor:'black'}]}>
                <Switch
                value = {BGColor}
                onValueChange={(itemValue) => setBGColor(itemValue)}>

                </Switch>
                <Text style={[styles.cont,{textColor:'#FFF'}]}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </Text>
            </View>
        )
    }

    if(Scrollability === true){
        scrollScreen = (
            <Switch
            value = {Scrollability}
            onValueChange={(itemValue) => setScroll(itemValue)}
        )
    }

    return(
        <View>
            {colorTheme}
        </View>
    )
}

export default Story;