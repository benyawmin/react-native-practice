import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'

const List = () => {

    const list = [
        {item: '1', cost: 100},
        {item: '2', cost: 200},
        {item: '3', cost: 300},
        {item: '4', cost: 400},
        {item: '5', cost: 500},
        {item: '6', cost: 600},
        {item: '7', cost: 700},
        {item: '8', cost: 800},
        {item: '9', cost: 900},
        {item: '10', cost: 1000}
    ]

    return (

        <View>
            <FlatList
            keyExtractor={list => list.item}
            data={list}
            renderItem={ ({item}) => {return (<Text style={styles.textStyle}>Item {item.item} costs {item.cost} dolors</Text>)}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50
    }
})

export default List