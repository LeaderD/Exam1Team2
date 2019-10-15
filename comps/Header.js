/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text,TextInput, Button} from 'react-native';
import HeaderStyle from '../styles/headerStyle';

function Header() {

    const [settedText, setChangeText] = useState('The Story Of My Life'); 
    const [showInput, setShowInput] = useState(false);
    var InputTitle = null;
    var valueTextTyped =  null;

    if (showInput === true){
    InputTitle = (
      <View>
           <TextInput
          placeholder="Type here to translate!"
          onChangeText={() => setChangeText()}
          value={valueTextTyped}
        />
      </View>
      )
    }
    


    return (
      <View style={HeaderStyle.HeaderBackground}>
        <Text Style={HeaderStyle.TextStyle}>{settedText}</Text>
        {InputTitle}
        <Button
          style ={HeaderStyle.ButtonColor}
          title="Edit"
          color="#f194ff"
          onPress = {() => {
            setShowInput(!showInput);
            }}
        />
      </View>
    );
  }
  
  
  export default Header;