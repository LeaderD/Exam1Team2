import React,{useState} from 'react';
import {
    Text,
    View, 
    Switch,
    ScrollView
} from 'react-native';
import styles from '../styles/StoryStyles';

function Story(){
    const [BGColor, setBGColor] = useState(false);
    const [Scrollability, setScroll] = useState(false);

    var colorTheme = null

    if(BGColor === false){
        colorTheme = (
            <View style={[styles.cont,{backgroundColor:'powderblue'}]}>
                <Text> Night Mode </Text>
                <Switch
                value = {BGColor}
                onValueChange={(itemValue) => setBGColor(itemValue)}/>
                <Text style={[styles.text,{color:'#000'}], styles.textBox}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        )
    }

    if(BGColor === true){
        colorTheme = (
            <View style={[styles.cont,{backgroundColor:'black'}]}>
                 <Text style={[styles.text,{color:'#FFF'}]}> Night Mode </Text>
                <Switch
                value = {BGColor}
                onValueChange={(itemValue) => setBGColor(itemValue)}>

                </Switch>
                <Text style={[styles.text,{color:'#FFF'}]}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </Text>
            </View>
        )
    }

    if(Scrollability === true){
        scrollScreen = (
            <Switch
            value = {Scrollability}
            onValueChange={(itemValue) => setScroll(itemValue)}

            />
        )
    }

    return(
        <View>
            {colorTheme}
        </View>
    )
}

export default Story;