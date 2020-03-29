import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Intro = () => {
    
    return(
        <View>
            <Text style={styles.introHeading}>This is an Introduction</Text>
            <Text style={styles.introSubHeading}>This is subheading</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    introHeading: {
        fontSize: 50
    },

    introSubHeading: {
        fontSize: 30
    }
})

export default Intro