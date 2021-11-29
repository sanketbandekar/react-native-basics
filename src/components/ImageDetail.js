import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const ImageDetail = ({title, imageToShow, score}) => {
    return(
        <View style={style.cardStyle}>
            <Image source={ imageToShow }/>
            <Text style={style.inLine}>{ title }</Text>
            <Text style={style.inLine}>{ score }</Text>
        </View>
        
    )
   
}

const style = StyleSheet.create({
    cardStyle: {
        marginHorizontal: 25,
        marginVertical: 30
    },

    inLine: {
        marginVertical: 10
    }
})

export default ImageDetail