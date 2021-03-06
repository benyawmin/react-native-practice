import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Intro" onPress={() => navigation.navigate("Intro")} />

      <Button
        title="List"
        onPress={() => {
          navigation.navigate("List");
        }}
      />

      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />

      <Button
      title='Go to CounterScreen'
      onPress={() => {
        navigation.navigate('Counter')
      }}
      />

      <Button
      title="Go to RandomColorScreen"
      onPress={() => {
        navigation.navigate('Color')
      }}
      />

      <Button
      title="Go to Color Changer"
      onPress={() => {
        navigation.navigate('Changer')
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
