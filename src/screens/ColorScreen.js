import React, {useState} from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'

const ColorScreen = () => {

    const [colors, setColor] = useState([])
    return <View>
        <Button title="Add a color" onPress={() => {
            setColor([...colors,randomRGB()])
        }}/>
        
        <FlatList
        keyExtractor={item => item} //should be unique
        data={colors}
        renderItem={ ({item}) => {
            return(
                <View
                    style={{ height: 100, width: 100, backgroundColor: item }}
                />
            )
        }}
        />
    </View>
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb( ${red}, ${green}, ${blue} )`
}

const style = StyleSheet.create({})

export default ColorScreen