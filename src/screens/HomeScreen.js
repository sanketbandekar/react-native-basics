import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>Hello Sanket Bandekar</Text>
      <Button
        onPress={ () => navigation.navigate('Component') }
        title="Click here to go to Component screen"/>

      <TouchableOpacity onPress={ () => navigation.navigate('ListScreen') }>
        <Text>Click here</Text>
      </TouchableOpacity>

      <Button
        onPress={ () => navigation.navigate('Image') }
        title="Click here to go to Image screen"/>

      <Button
        onPress={ () => navigation.navigate('Counter') }
        title="Go to Counterscreen"/>

      <Button
        onPress={ () => navigation.navigate('Color') }
        title="Go to Color Screen"/>

      <Button
        onPress={ () => navigation.navigate('CustomColor') }
        title="Go to Custom Color Screen"/>

      <Button
        onPress={ () => navigation.navigate('TextDemo') }
        title="Go to Text Screen"/>

      <Button
        onPress={ () => navigation.navigate('Box') }
        title="Go to Box Screen"/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
