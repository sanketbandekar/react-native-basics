import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreens = () => {

    const friends = [
        {name: 'Sanket', age: 20},
        {name: 'Saurabh', age: 21},
        {name: 'Sanchit', age: 22},
        {name: 'Sainesht', age: 23},
        {name: 'Mrunal', age: 10},
        {name: 'Manju', age: 24},
        {name: 'Nachi', age: 25},
        {name: 'Yash', age: 26},
        {name: 'Kamlesh', age: 25},
        {name: 'Mangesh', age: 25},
        {name: 'Mukund', age: 40},
        {name: 'Mapusa', age: 50},
        {name: 'Margao', age: 60},
        {name: 'Malvan', age: 10},
        {name: 'Marmugoa', age: 24}
    ]

    return (
        <FlatList 
        //horizontal
        //showsVerticalScrollIndicator={false}
        //showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem = {({item}) => {
            return <Text style={style.textMargin}>{item.name} - Age {item.age}</Text>
        }} 
        />

    );

}

const style = StyleSheet.create({
    textMargin: {
        marginVertical: 25,
        marginHorizontal: 15
    }
})

export default ListScreens