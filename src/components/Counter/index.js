import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Counter({title, nb}) {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.nb}>{nb}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    title:{
        fontWeight: "bold",
        fontSize:15,
        color: "grey"
    
    },
    nb:{
        fontWeight: "bold",
        fontSize:20
    }
})