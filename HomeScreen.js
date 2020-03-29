import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const HomeScreen = ({navigation}) => {

    return (
    <View>
        <Button
        title="Intro"
        onPress={() => navigation.navigate('Intro')}
        />

        <Button title="List"
        onPress={() => {
            navigation.navigate('List')
        }}
        />

        <Button
        title="Go to Image Screen"
        onPress={() => {
            navigation.navigate('Image')
        }}
        />

    </View>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30
    }
})

export default HomeScreen

