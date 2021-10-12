import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const days = ["Dimanche", "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
const month = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]

export default function Header() {
    const date = new Date()
    return (
        <View style={styles.container}>
            <Text style={styles.date}> {`${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 25,
        paddingTop: 40,
    },
    date:{
        fontSize: 25,
        fontWeight: "bold",
    },
})