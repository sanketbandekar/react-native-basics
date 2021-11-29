import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Components = () => {
    const greet = "Sanket"
    return <View>
        <Text style={styles.textStyles}>Getting Started with React Native</Text>
        <Text style={styles.subText}>My name is {greet} </Text>
    </View>

}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 45
    },
    subText: {
        fontSize: 20
    }
});

export default Components;