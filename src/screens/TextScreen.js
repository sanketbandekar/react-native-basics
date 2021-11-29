import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    return(
        <View>
            <Text style={{ margin: 10 }} >Enter Name:</Text>
            <TextInput 
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => { setName(newValue) }}
            />
            <Text style={{ margin: 10 }} >My Name is {name}</Text>

            <TextInput 
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={pass}
                onChangeText={(newValue) => { setPass(newValue) }}
            />

            {
                pass.length <6 ? <Text style={{color: 'red'}}>Pasword should be more than 5 characters long*</Text> :
                null
            }
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        margin: 2,
        borderColor: 'black',
        borderWidth: 3
    }
})

export default TextScreen