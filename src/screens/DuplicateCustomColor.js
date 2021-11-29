import React,{useState} from "react";
import {Text, View,StyleSheet} from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCRE = 50

const DuplicateCustomColor = () =>{

    const [red, setRed] =  useState(0)
    const [blue, setBlue] =  useState(0)
    const [green, setGreen] =  useState(0)

    const setColor= (value, change) => {
        //value = 'red' 'green' 'blue'  
        switch(value){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                break
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                break
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue+ change)
                break
            default:
                return
        }
        
    }

    return (
        <View>
            <ColorCounter 
            onIncrease = { () => setColor( 'red', COLOR_INCRE )} 
            onDecrease = { () => setColor( 'red', -1 * COLOR_INCRE )} 
            color="Red"
            />
            <ColorCounter 
            color="Blue"
            onIncrease = { () => setColor( 'blue' , COLOR_INCRE )} 
            onDecrease = { () => setColor( 'blue' , -1 * COLOR_INCRE )} 
            />
            <ColorCounter 
            color="Green"
            onIncrease = { () => setColor ('green' ,COLOR_INCRE )} 
            onDecrease = { () => setColor('green' , -1 * COLOR_INCRE )} 
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default DuplicateCustomColor