import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/*
 <Text style={style.textStyle}>List</Text>
*/

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>

            <View style={style.viewGroup1}></View>

            <View style={style.viewGroup2}></View>

            <View style={style.viewGroup3}></View>

        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 2,
        borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    textStyle: {
        padding: 5,
        fontStyle: 'italic',
        fontSize: 15,
        textAlign: 'center'
        

    },

    viewGroup1: {
        height  : 100,
        width: 100,
        backgroundColor: 'red',
        
    },

    viewGroup2: {
        height  : 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
       
    },

    viewGroup3: {
        height  : 100,
        width: 100,
        backgroundColor: 'purple',
        
    }


})

export default BoxScreen