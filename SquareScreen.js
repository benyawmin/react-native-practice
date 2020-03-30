import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const SquareScreen = () => {
    return <View>
        <ColorCounter color="Red"/>
        <ColorCounter color="Blue"/>
        <ColorCounter color="Green"/>
    </View>
}   

const styles = StyleSheet.create({})

export default SquareScreen