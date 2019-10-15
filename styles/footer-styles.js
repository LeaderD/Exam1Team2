import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        top: 500,
        backgroundColor: "pink",
        
    },

    author:{
        bottom: 185,
        left: 40,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "gray"
        

    },
    by:{
        fontStyle: "italic",
        color: "gray",
        top: 35,
        left: 20
    },
    picker:{
        width:"30%",
        left: 250,
        bottom: 60
    }

})

export default styles;