import React, {useState} from 'react';
import {View, Picker, Text} from 'react-native';
import styles from '../styles/footer-styles';

function Bottom(){




const [aName, setaName] = useState(1)


    var msg = (
        <Text style={styles.author} >Author Full Name</Text>
    )
    if(aName == 2){
        msg = (
            <Text style={styles.author}>Sam Marles</Text>
        )
    }
    if(aName == 3){
        msg = (
            <Text style={styles.author}>Jesse Jen</Text>
        )
    }
    if(aName == 4){
        msg = (
            <Text style={styles.author}>Chaze Style</Text>
        )
    }

    return(
        <View style={styles.container}>

            <Text style={styles.by}>By</Text>

            <Picker style={styles.picker}
            onValueChange={(value)=>{setaName(value)}}
            selectedValue={aName}>
                <Picker.Item label = "Story 1" value = "2" />
                <Picker.Item label = "Story 2" value = "3" />
                <Picker.Item label = "Story 3" value = "4" />
            </Picker>
            {msg}
        



        </View>
    )
}

export default Bottom;