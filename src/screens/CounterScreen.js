import React, {useState, useReducer} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

/*
const [counter, setCounter] = useState(0)

    return <View>
        <Button title="Increment" onPress={ () => {
            setCounter(  counter + 1)
        } } style={ style.margin }/>
        <Button title="Decrement" onPress={ () => {
            setCounter(  counter - 1)
        } } style={ style.margin }/>
        <Text>Current Count: {counter}</Text>

        </View>
*/

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        default:
            state
    }
}

const CounterScreen = () => {

    const [state, dispatch]  = useReducer(reducer, {count:0})
    //const {counter} = state

    return <View>
        <Button title="Increment" 
        onPress={ () => { dispatch({ type: 'increment'})} } 
        style={ style.margin }
        />

        <Button title="Decrement" 
        onPress={ () => { dispatch({ type: 'decrement' })} } 
        style={ style.margin }
        />

        <Text>Current Count: {state.count}</Text>
        </View>
}
        

const style = StyleSheet.create({
    margin: {
        marginVertical: 10
    }
})

export default CounterScreen