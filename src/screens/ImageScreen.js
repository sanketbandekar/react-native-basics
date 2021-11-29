import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageToShow={ require('../../assets/forest.jpg') } score="Image Score - 9"/>
        <ImageDetail title="Beach" imageToShow={ require('../../assets/beach.jpg')} score="Image Score - 6"/>
        <ImageDetail title="Mounatin" imageToShow={ require('../../assets/mountain.jpg')} score="Image Score - 5"/>
        </View>
}

const style = StyleSheet.create({})

export default ImageScreen